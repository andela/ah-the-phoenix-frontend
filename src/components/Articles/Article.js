import React, { Component } from "react";
import { getArticle } from "../../redux/actioncreators/getArticleActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Image, Segment, Button, Container, Divider } from "semantic-ui-react";
import ReactHtmlParser from "react-html-parser";
import Loader from "../Loader/Loader";
import { deleteArticle } from "../../redux/actioncreators/deleteArticle";

export class Article extends Component {
  componentDidMount() {
    this.props.getArticle();
  }

  handleDelete = (e, article_slug) => {
    e.preventDefault();
    this.props.deleteArticle(article_slug);
  };

  render() {
    const { article } = this.props;
    const user = JSON.parse(localStorage.getItem("user"));
    let editdeleteOptions = null;
    if (Object.keys(article).length !== 0) {
      const edit_link = "/articles/" + article.slug + "/edit_article/";

      editdeleteOptions =
        user.username === article.author.username ? (
          <Container textAlign="right">
            <Button
              size="mini"
              as={Link}
              to={edit_link}
              content="Edit"
              color="blue"
            />
            <Button
              size="mini"
              content="Delete"
              color="red"
              onClick={e => {
                this.handleDelete(e, article.slug);
              }}
            />
          </Container>
        ) : null;
    }
    const articleRender = () => {
      if (this.props.fetching) {
        return (
          <Loader
            className={this.props.fetching ? "active" : "inactive"}
            size="large"
          />
        );
      }
      if (!article.title) {
        return (
          <div>
            <h1>Article Not Found</h1>
          </div>
        );
      }
      return (
        <div>
          <Segment>
            {editdeleteOptions}
            <h1>{article.title}</h1>
            <Image
              src={
                article.image
                  ? article.image.slice(13)
                  : "https://www.impossible.sg/wp-content/uploads/2013/11/seo-article-writing.jpg"
              }
              size="large"
            />
            <Divider />
            {ReactHtmlParser(article.body)}
          </Segment>
        </div>
      );
    };

    return <div>{articleRender()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.getArticleReducer.fetching,
    article: state.getArticleReducer.article
  };
};

export default connect(
  mapStateToProps,
  { getArticle, deleteArticle }
)(Article);
