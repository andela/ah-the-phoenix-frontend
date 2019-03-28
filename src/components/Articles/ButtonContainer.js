import React, { Component } from 'react'
import { LikeDislike } from './LikeDislike'
import { Menu, Item, Icon, Rating } from 'semantic-ui-react'

export class ButtonContainer extends Component {

    iconClass = (slug) => {
        if (this.props.props.fetching) {
            return "loading"
        }
        if (this.bookmarked(slug)) {
            return "enabled"
        }
        return "disabled"
    }


    bookmarked = (slug) => {
        const articleInFavs = this.props.props.favArticles.filter(article => article.slug === slug)
        if (articleInFavs.length > 0) {
            return true
        }
        else {
            return false
        }
    }

    handleBookmark = (slug) => {
        if (this.bookmarked(slug)) {
            this.props.props.unBookmarkArticle()
        }
        else {
            this.props.props.bookmarkArticle()
        }
    }


    handleRate = (e, { rating }) => {
        this.props.props.rateArticle(rating);
    };

    handleClick = (e, article_slug) => {
        e.preventDefault();
        this.props.props.rateArticle(article_slug);
    };


    render() {
        const user = JSON.parse(localStorage.getItem("user"))
        const likecomponent = () => {
            if (user) {

                return (
                    <LikeDislike props={this.props.props} />
                )
            }
            else {
                return <LikeDislike disabled="true" props={this.props.props} />
            }
        }


        return (
            <div>
                <br></br>
                Average Rating: <b> {this.props.props.average_rating}</b>
                <br></br>
                <Menu widths={3} fluid borderless className="menu-btns">
                    <Menu.Item name='likesdislike'>
                        <Item.Extra className="like-dislike">
                            {likecomponent()}
                        </Item.Extra>
                    </Menu.Item>

                    <Menu.Item>
                        {user && user.username !== this.props.props.article.author.username ? <Rating
                            maxRating={5}
                            defaultRating={this.props.props.user_rating}
                            icon="star"
                            size="massive"
                            onRate={this.handleRate}
                        /> :
                            null
                        }

                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            {user ? <Icon link name="bookmark" className={this.iconClass(this.props.props.article.slug)}
                                onClick={() => this.handleBookmark(this.props.props.article.slug)}
                                size="large" /> : null}
                        </Menu.Item>

                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}

export default ButtonContainer
