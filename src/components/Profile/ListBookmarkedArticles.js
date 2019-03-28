import React, { Component } from 'react'
import { connect } from 'react-redux'
import ArticleContainer from '../Articles/ArticlesContainer';
import { getBookmarked } from '../../redux/actioncreators/listBookmarkedArticles'

export class ListBookmarkedArticles extends Component {
    componentDidMount = () => {
        this.props.getBookmarked();
    };

    render() {
        return (
            <div>
                <ArticleContainer articles={this.props.favArticles} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { favArticles: state.bookmarkArticleReducer.articles }
}

export default connect(mapStateToProps, { getBookmarked })(ListBookmarkedArticles)