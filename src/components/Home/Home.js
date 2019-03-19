import React, { Component } from 'react';
import './Home.scss';
import { connect } from 'react-redux'
import { getArticles } from "../../redux/actioncreators/listArticlesActions"
import Loader from '../Loader/Loader';
import { Item } from 'semantic-ui-react';
import { articleContainer } from '../Articles/ArticlesContainer';

export class Home extends Component {
    componentDidMount = () => {
        this.props.getArticles()
    }

    render() {
      const torender = () => this.props.articles.map(article => {
        return articleContainer(article)
      });
      const form = torender()

      const rendered = () => {
        if (this.props.fetching){
          return <Loader />
        }
        else{
          return <Item.Group>{form}</Item.Group>
        }
      }

      return (
          <div>
              {rendered()}
          </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {fetching: state.listArticlesReducer.fetching, articles: state.listArticlesReducer.articles}
}

export default connect(mapStateToProps, {getArticles})(Home)
