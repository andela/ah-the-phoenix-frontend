import React, { Component } from 'react';
import './Home.scss';
import { connect } from 'react-redux'
import { getArticles } from "../../redux/actioncreators/listArticlesActions"
import Loader from '../Loader/Loader';
import ArticleContainer from '../Articles/ArticlesContainer';

export class Home extends Component {
  componentDidMount = () => {
    this.props.getArticles();
  };

  render() {
    const { isFetching, articles } = this.props
    if (isFetching) {
      return <Loader />
    }

    return (
      <div>
        <ArticleContainer articles={articles} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isFetching: state.articlesReducer.isFetching, articles: state.articlesReducer.articles }
}

export default connect(mapStateToProps, { getArticles })(Home)
