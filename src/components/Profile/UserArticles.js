import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleContainer from '../Articles/ArticlesContainer';
import { getArticles } from "../../redux/actioncreators/listArticlesActions";

export class UserArticles extends Component {
    componentDidMount = () => {
        this.props.getArticles();
    };
    render() {
        const { articles, author_id } = this.props
        const userArticles = articles.filter(article => article.author.username === author_id)
        return (
            <div>
                <ArticleContainer articles={userArticles} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { articles: state.articlesReducer.articles }
}

export default connect(mapStateToProps, { getArticles })(UserArticles)
