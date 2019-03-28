import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Image, Segment, Button, Container, Divider, Item } from 'semantic-ui-react';
import ReactHtmlParser from 'react-html-parser'
import Loader from '../Loader/Loader';
import './Article.scss';
import { getArticle } from "../../redux/actioncreators/getArticleActions";
import { deleteArticle } from "../../redux/actioncreators/deleteArticle";
import { bookmarkArticle } from "../../redux/actioncreators/bookmarkArticleActions";
import { unBookmarkArticle } from "../../redux/actioncreators/unBookmarkArticleActions";
import { getBookmarked } from '../../redux/actioncreators/listBookmarkedArticles';
import { rateArticle } from "../../redux/actioncreators/postRatingActions";
import { averageRating } from "../../redux/actioncreators/getRatingActions";
import { likeFunction } from '../../redux/actioncreators/likeDislikeArticle'
import { dislikeFunction } from '../../redux/actioncreators/likeDislikeArticle'
import SocialShare from '../SocialShare/SocialShare'
import { ButtonContainer } from './ButtonContainer'

export class Article extends Component {
    state = {};
    componentDidMount() {
        this.props.getArticle();
        this.props.getBookmarked();
        this.props.averageRating();
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
            if (this.props.isFetching) {
                return <Loader />
            }
            if (!article.title) {
                return (
                    <div>
                        <h1>Article Not Found</h1>
                    </div>
                )
            }

            const userProfileUrl = "/profile/" + article.author.id
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
                                    <Item.Meta as={Link} to={userProfileUrl}>
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
                                    <ButtonContainer props={this.props} />
                                    <br></br>

                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                </div>
            )
        }

        return (
            <div>
                <SocialShare article={article} />
                {articleRender()}
                <br />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.articlesReducer.isFetching,
        article: state.articlesReducer.article,
        user_rating: state.ratingsReducer.user_rating,
        average_rating: state.ratingsReducer.average_rating,
        favArticles: state.bookmarkArticleReducer.articles,
        liked: state.articlesReducer.liked,
        disliked: state.articlesReducer.disliked,
        like_status: state.likeDislikeReducer.like_status,
        dislike_status: state.likeDislikeReducer.dislike_status,
        likes_count: state.likeDislikeReducer.likes_count,
        dislikes_count: state.likeDislikeReducer.dislikes_count,
        likeSuccess: state.likeDislikeReducer.likeSuccess,
        dislikeSuccess: state.likeDislikeReducer.dislikeSuccess,
    };
};

export default connect(
    mapStateToProps,
    { deleteArticle, getArticle, rateArticle, averageRating, bookmarkArticle, unBookmarkArticle, getBookmarked, likeFunction, dislikeFunction }
)(Article);
