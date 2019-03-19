import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticles } from "../../redux/actioncreators/listArticlesActions";
import { articleContainer } from "./ArticlesContainer";
import Loader from "../Loader/Loader";
import { Item } from "semantic-ui-react";

export class ListArticles extends Component {
  componentDidMount = () => {
    this.props.getArticles();
  };

  render() {
    const torender = () =>
      this.props.articles.map(article => {
        return articleContainer(article);
      });
    const form = torender();

    const rendered = () => {
      if (this.props.fetching) {
        return <Loader />;
      } else {
        return <Item.Group divided>{form}</Item.Group>;
      }
    };

    return <div>{rendered()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.listArticlesReducer.fetching,
    articles: state.listArticlesReducer.articles
  };
};

export default connect(
  mapStateToProps,
  { getArticles }
)(ListArticles);
