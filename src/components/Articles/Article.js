import React, { Component } from 'react'
import { getArticle } from "../../redux/actioncreators/getArticleActions"
import { connect } from 'react-redux'
import { Loader, Container } from 'semantic-ui-react';

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

                        <p style={{ fontSize: "1.2em" }}>
                            {article.body}
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
    return { fetching: state.getArticleReducer.fetching, article: state.getArticleReducer.article }
}

export default connect(mapStateToProps, { getArticle })(Article)
