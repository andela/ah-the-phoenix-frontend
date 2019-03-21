import React, { Component } from 'react'
import CKEditor from 'react-ckeditor-component';
import { Container, Form, Button, Divider, Message, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import upload from '../../helpers/uploader'
import { createArticleFunction } from '../../redux/actioncreators/createArticle'
import { updateArticle } from '../../redux/actioncreators/updateArticle'
import { connect } from 'react-redux'
import { validate } from '../../helpers/validator'
import Loader from '../Loader/Loader'
import './CreateEditArticle.scss'

export class CreateEditArticle extends Component {
    state = {
        title: '',
        body: '',
        description: '',
        image_url: '',
        errors: { titleError: null, bodyError: null, descriptionError: null }
    };
    componentDidMount() {
        const { action, article } = this.props;
        if (action === "update") {
            this.setState({
                title: article.title,
                description: article.description,
                body: article.body
            })
        }
    }

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

    formSubmit = (e) => {
        e.preventDefault();
        const { title, body, description, image_url } = this.state;
        const errors = validate(title, body, description);
        if (errors) {
            this.setState({
                errors: errors
            })
        } else {
            const payload = {
                title,
                body,
                description,
                image: image_url
            }
            const { action, slug } = this.props;
            if (action === "create") {
                this.props.createArticleFunction(payload)
            } else if (action === "update") {
                this.props.updateArticle(slug, payload)
            }

        }
    }

    render() {
        const user = localStorage.getItem("user");
        if (!user) {
            window.location.replace("/login");
        }

        const { isFetching, action } = this.props;
        var formHeader = ""
        var buttonName = ""
        if (action === "create") {
            formHeader = "Create new article"
            buttonName = "Publish"
        } else if (action === "update") {
            formHeader = "Edit article"
            buttonName = "Update Article"
        }
        if (isFetching === true) {
            return (
                <Loader />
            )
        }

        return (

            <Form onSubmit={this.formSubmit} error className="create-article-form">
                <Container>
                    <Header textAlign="center"><u>{formHeader}</u></Header>
                    <h5>Add a title</h5>
                    <Form.Input
                        fluid
                        name="title"
                        placeholder="Title"
                        transparent
                        className="editor-input"
                        maxLength={80}
                        onChange={this.handlechange}
                        value={this.state.title}
                    />

                    <Divider />
                    <Message
                        error
                        className="errors"
                        content={this.state.errors.titleError}
                    />
                    <h5>Add a description</h5>
                    <Form.TextArea
                        name="description"
                        placeholder="Description"
                        className="description-input"
                        onChange={this.handlechange}
                        value={this.state.description}
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
                    <h5>Add a body</h5>
                    <CKEditor
                        content={this.state.body}
                        events={{ change: this.handleEditor }}
                    />
                    <br></br>
                    <Message
                        error
                        className="errors"
                        content={this.state.errors.bodyError}
                    />
                    <br></br>
                    <Button
                        type="submit"
                        positive
                        color="green"
                        content={buttonName}
                        position="right"
                    />
                    <Button
                        className="ui black button"
                        as={Link} to='/'
                        content="Cancel"
                        position="right"
                    />
                </Container>
                <br></br>
                <br></br>
            </Form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isFetching: state.articlesReducer.isFetching,
        payload: state.articlesReducer.payload,
        article: state.articlesReducer.article
    }
}

export default connect(mapStateToProps, { createArticleFunction, updateArticle })(CreateEditArticle);
