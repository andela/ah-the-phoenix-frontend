import React, { Component } from 'react'
import { Icon, Label, Button } from 'semantic-ui-react'

export class LikeDislike extends Component {

    handleLike = () => {
        this.props.props.likeFunction();
    }
    handleDislike = () => {
        this.props.props.dislikeFunction();
    }
    render() {
        const { liked, disliked,
            likes_count, dislikes_count, article
        } = this.props.props;

        return (
            <div>
                <Button as='div' labelPosition='right' disabled={this.props.disabled === "true" ? true : null}>
                    <Button onClick={this.handleLike} color={!liked ? null : "teal"} name="likeBtn" >
                        <Icon name='thumbs up' />
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {this.props.disabled === "true" ? article.likes_count : likes_count}
                    </Label>
                </Button>

                <Button as='div' labelPosition='right' disabled={this.props.disabled === "true" ? true : null}>
                    <Button onClick={this.handleDislike} color={!disliked ? null : "red"} name="dislikeBtn">
                        <Icon name='thumbs down' />
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {this.props.disabled === "true" ? article.dislikes_count : dislikes_count}
                    </Label>
                </Button>
            </div>

        )
    }
}

export default LikeDislike
