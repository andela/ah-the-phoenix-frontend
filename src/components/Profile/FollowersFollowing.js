import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

export class FollowersFollowing extends Component {
    render() {
        const { profile, follow_list } = this.props
        let followlist = null
        if (follow_list === "followers") {
            followlist = profile.followers
        } else if (follow_list === "following") {
            followlist = profile.following
        }
        const followList = followlist.map(follower => {
            const profileLink = "/profile/" + follower.user_id
            return (
                <List.Item key={follower.user_id}>
                    <Image avatar src={follower.image} />
                    <List.Content>
                        <List.Header as="a" href={profileLink} >{follower.username}</List.Header>
                    </List.Content>
                </List.Item>
            )
        })
        return (
            <div>
                <List>
                    {followList}
                </List>
            </div>
        )
    }
}

export default FollowersFollowing
