import React, { Component } from "react";
import CKEditor from "react-ckeditor-component";
import { Container, Form, Button, Divider, Message } from "semantic-ui-react";
import { Link } from "react-router-dom";
import upload from "../../helpers/uploader";
import { createArticleFunction } from "../../redux/actioncreators/createArticle";
import { connect } from "react-redux";
import { validate } from "../../helpers/validator";
import Loader from "../Loader/Loader";
import "./CreateEditArticle.scss";

export class CreateEditArticle extends Component {
  state = {
    title: "",
    body: "",
    description: "",
    image_url: "",
    errors: { titleError: null, bodyError: null, descriptionError: null }
  };

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleEditor = e => {
    const content = e.editor.getData();
    this.setState({
      body: content
    });
  };

  fileHandler = event => {
    const selectedFile = event.target.files[0];
    upload({ image: selectedFile })
      .then(res => this.setState({ image_url: res.data.secure_url }))
      .catch(err => console.log(err.request));
  };

  formSubmit = e => {
    e.preventDefault();
    const { title, body, description, image_url } = this.state;
    const errors = validate(title, body, description);
    if (errors) {
      this.setState({
        errors: errors
      });
    } else {
      const payload = {
        title,
        body,
        description,
        image: image_url
      };
      this.props.createArticleFunction(payload);
    }
  };

  render() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      window.location.replace("/login");
    }
    const { isFetching } = this.props;
    if (isFetching === true) {
      return <Loader />;
    }

    return (
      <Form onSubmit={this.formSubmit} error className="create-article-form">
        <Container>
          <h1>
            <Form.Input
              fluid
              name="title"
              placeholder="Title"
              transparent
              className="editor-input"
              maxLength={80}
              onChange={this.handlechange}
            />
          </h1>

          <Divider />
          <Message
            error
            className="errors"
            content={this.state.errors.titleError}
          />
          <Form.TextArea
            name="description"
            placeholder="Description"
            className="description-input"
            onChange={this.handlechange}
          />
          <Message
            error
            className="errors"
            content={this.state.errors.descriptionError}
          />
          <h5>Add an image</h5>
          <Form.Input
            type="file"
            className="form-control"
            onChange={this.fileHandler}
          />
          <Divider />
          <CKEditor
            content={this.state.body}
            events={{ change: this.handleEditor }}
          />
          <br />
          <Message
            error
            className="errors"
            content={this.state.errors.bodyError}
          />
          <br />
          <Button
            type="submit"
            positive
            color="green"
            content="Post"
            position="right"
          />
          <Button
            className="ui black button"
            as={Link}
            to="/"
            content="Cancel"
            position="right"
          />
        </Container>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.createArticleReducer.isFetching,
    payload: state.createArticleReducer.payload
  };
};

export default connect(
  mapStateToProps,
  { createArticleFunction }
)(CreateEditArticle);
