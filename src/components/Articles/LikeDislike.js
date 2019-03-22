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
        const {
            dislikeSuccess, likeSuccess, liked, disliked,
            likes_count, dislikes_count, like_status, dislike_status
            , article
        } = this.props.props;
        let like_count = null;
        let dislike_count = null;
        let like_stat = null;
        let dislike_stat = null;


        if (likeSuccess || dislikeSuccess) {
            like_stat = like_status
            dislike_stat = dislike_status
            like_count = likes_count
            dislike_count = dislikes_count
        } else {
            like_stat = liked
            dislike_stat = disliked
            like_count = article.likes_count
            dislike_count = article.dislikes_count
        }
        return (
            <div>
                <Button as='div' labelPosition='right'>
                    <Button onClick={this.handleLike} color={!like_stat ? null : "teal"} >
                        <Icon name='thumbs up' />
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {like_count}
                    </Label>
                </Button>

                <Button as='div' labelPosition='right'>
                    <Button onClick={this.handleDislike} color={!dislike_stat ? null : "red"}>
                        <Icon name='thumbs down' />
                    </Button>
                    <Label as='a' basic pointing='left'>
                        {dislike_count}
                    </Label>
                </Button>

            </div>
        )
    }
}

export default LikeDislike
