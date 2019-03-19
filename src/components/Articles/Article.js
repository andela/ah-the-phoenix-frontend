import React, {Component} from 'react'
import {getArticle} from "../../redux/actioncreators/getArticleActions"
import {connect} from 'react-redux'
import {Image, Container} from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser'
import Loader from '../Loader/Loader';

export class Article extends Component {
    componentDidMount() {
        this.props.getArticle()
    }

    render() {
        const article = this.props.article
        const articleRender = () => {
            if (this.props.fetching) {
                return (<Loader
                    className={this.props.fetching
                        ? "active"
                        : "inactive"}
                    size='large' />)
            }
            if (!article.title) {
                return (
                    <div>
                        <h1>Article Not Found</h1>
                    </div>
                )
            }
            return (
                <div>
                    <Container text>
                    <h1>{article.title}</h1>
                    <Image
                            src={article.image ?
                            article.image.slice(13)
                            : "https://www.impossible.sg/wp-content/uploads/2013/11/seo-article-writing.jpg"}
                            size="large"/>
                    <p style={{fontSize: "1.2em"}}>
                        {ReactHtmlParser(article.body)}
                    </p>
                    </Container>

                </div>
            )
        }

        return (
            <div>
                {articleRender()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {fetching: state.getArticleReducer.fetching, article: state.getArticleReducer.article}
}

export default connect(mapStateToProps, {getArticle})(Article)
