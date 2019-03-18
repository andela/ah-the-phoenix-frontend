import React, { Component } from 'react'
import { getArticle } from "../../redux/actioncreators/getArticleActions"
import { deleteArticle } from "../../redux/actioncreators/deleteArticle";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Image, Segment, Button, Container, Divider, Item } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser'
import Loader from '../Loader/Loader';
import './Article.scss'

export class Article extends Component {
    componentDidMount() {
        this.props.getArticle()
    }
    handleDelete = (e, article_slug) => {
        e.preventDefault();
        this.props.deleteArticle(article_slug);
    };
    render() {
        const { article } = this.props
        const edit_link = "/articles/" + article.slug + "/edit_article/";
        const user = JSON.parse(localStorage.getItem("user"))
        let editdeleteOptions = null
        if (Object.keys(article).length !== 0 && user) {
            editdeleteOptions = user.username === article.author.username ? (
                <Container textAlign='right'>
                    <Button size="mini" as={Link} to={edit_link} content="Edit" icon="edit" color='blue' />
                    <Button size="mini" content="Delete" color='red' icon="delete"
                        onClick={e => { this.handleDelete(e, article.slug) }} />
                </Container>
            ) : (
                    null
                )
        }
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
                    <Segment className="articledetail">
                        {editdeleteOptions}
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header>
                                        <h1 className="article-title">{article.title}</h1>
                                    </Item.Header>
                                    <br></br>
                                    <Item.Meta>
                                        <Image className="ui avatar image" src={article.author.image.slice(13)} />
                                        <span>{article.author.username}</span>
                                    </Item.Meta>
                                    <br></br>
                                    <Item.Description>
                                        <Image className="topImage"
                                            src={article.image ?
                                                article.image.slice(13)
                                                : "https://www.impossible.sg/wp-content/uploads/2013/11/seo-article-writing.jpg"}
                                        />
                                        <Divider />
                                        <div className="articlebody">
                                            {ReactHtmlParser(article.body)}
                                        </div>
                                    </Item.Description>
                                    <br></br>
                                    <Item.Extra>
                                        Created at: {article.created_at.slice(0, 10)}
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>

                </div>
            )
        }

        return (
            <div>
                {articleRender()}
                <br></br>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { fetching: state.getArticleReducer.fetching, article: state.getArticleReducer.article }
}

export default connect(mapStateToProps, { deleteArticle, getArticle })(Article)
