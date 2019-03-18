import React, { Component } from 'react';
import {
    Item,
    Loader
} from "semantic-ui-react";
import { connect } from 'react-redux'
import { getArticles } from "../../redux/actioncreators/listArticlesActions";

export class ListArticles extends Component {

    componentDidMount = () => {
        this.props.getArticles()
    }

    getWords = str => {
        return str.split(/\s+/).slice(0, 40).join(" ");
    }

    render() {
        const torender = () => this.props.articles.map(article => {
            const body = this.getWords(article.body)
            const articleUrl = "/articles/" + article.slug
            return (
                <Item>
                    <Item.Image
                        src={article.image ?
                            article.image.slice(13)
                            : "https://www.impossible.sg/wp-content/uploads/2013/11/seo-article-writing.jpg"}
                        size="small" />
                    <Item.Content>
                        <Item.Header as='a'>
                            <h1>{article.title}</h1>
                        </Item.Header>
                        <Item.Description>
                            <p
                                style={{
                                    fontSize: "1.3em",
                                    fontFamily: "Helvetica"
                                }}>{body}
                                <a href={articleUrl}>...read more</a>
                            </p>
                        </Item.Description>
                        <Item.Extra>
                            Created at: {article.created_at.slice(0, 10)}
                        </Item.Extra>
                    </Item.Content>
                </Item>
            )
        });

        const form = torender()
        return (
            <div>
                <Loader
                    className={this.props.fetching
                        ? "active"
                        : "inactive"}
                    size='large' />
                <div class="ui center aligned huge header">Articles</div>
                <Item.Group>{form}</Item.Group>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { fetching: state.listArticlesReducer.fetching, articles: state.listArticlesReducer.articles }
}

export default connect(mapStateToProps, { getArticles })(ListArticles)