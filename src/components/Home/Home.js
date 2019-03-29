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
        <div className="home-page">
          <br></br><br></br><br></br><br></br>
          <img className="homepage-img animated rubberBand" src="https://res.cloudinary.com/dw675k0f5/image/upload/v1553804705/storo/logo.jpg" alt="logo" />
          <h1 className="home-title">Welcome to Authors Haven</h1>
          <h4 className="home-sub-title">A place for the creative at heart</h4>
          <br></br><br></br></div>
        <ArticleContainer articles={articles} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { isFetching: state.articlesReducer.isFetching, articles: state.articlesReducer.articles }
}

export default connect(mapStateToProps, { getArticles })(Home)
