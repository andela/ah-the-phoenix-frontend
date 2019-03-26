import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Card, Image, Grid, Icon, Button, Label, Header
} from 'semantic-ui-react';
import './profile.scss';
import { followUser, unfollowUser } from '../../redux/actioncreators/followingActions'

export class ProfileCard extends Component {
    handleFollow = (e) => {
        e.preventDefault()
        const { followUser, user_id } = this.props
        followUser(user_id)
    }
    handleUnfollow = (e) => {
        e.preventDefault()
        const { unfollowUser, user_id } = this.props
        unfollowUser(user_id)
    }
    render() {
        const { isFollowing, profile, followed, followingCount, followersCount } = this.props;
        let followingState = null
        if (isFollowing === true) {
            followingState = "loading"
        }
        const user = JSON.parse(localStorage.getItem("user"));
        let editbutton = null
        let followUnfollowButton = null
        if (user && Object.keys(profile).length !== 0) {
            const editProfileUrl = "/" + user.user_id + "/edit_profile"
            if (user.username === profile.username) {
                editbutton = (
                    <Card.Content>
                        <Button as={Link} color="blue" to={editProfileUrl}><Icon name="edit" className="edit-profile" /></Button>
                    </Card.Content>
                )
            } else {
                console.log(followersCount)
                if (followed === true) {
                    followUnfollowButton = (
                        <Card.Content>
                            <Button className={followingState} color="red" basic content="Unfollow" size="tiny" onClick={this.handleUnfollow} />
                        </Card.Content >
                    )
                } else {
                    followUnfollowButton = (
                        <Card.Content>
                            <Button className={followingState} color="blue" basic content="Follow" size="tiny" onClick={this.handleFollow} />
                        </Card.Content >
                    )
                }
            }
        }
        const profileCard = () => (Object.keys(profile).length !== 0 ? (
            <Card className="profile-card">
                <Grid className="profile-grid">
                    <Grid.Column width={6}>
                        <Image src={profile.image} size="small" style={{ height: "150px", width: "150px" }} circular />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header>My Profile</Header>
                        <Card.Content>
                            <b>Name: </b><Card.Header>
                                {profile.username}
                            </Card.Header>
                            <b>Bio: </b><Card.Description>
                                {profile.bio}
                            </Card.Description>
                        </Card.Content>
                        <br />
                        {followUnfollowButton}
                        <br />
                        <Card.Content extra>
                            <Label color="teal">
                                <Icon name="user" />
                                Followers:
                <Label.Detail>{followersCount}</Label.Detail>
                            </Label>
                            <Label color="teal">
                                <Icon name="user" />
                                Following:
                <Label.Detail>{followingCount}</Label.Detail>
                            </Label>
                        </Card.Content>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        {editbutton}
                    </Grid.Column>
                </Grid>

            </Card>


        )

            : (
                <Header color="red" as="h2">Oops! Profile not found</Header>
            ));
        return (
            <div className="profile-div">
                {profileCard()}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isFollowing: state.profileReducer.isFollowing,
    profile: state.profileReducer.profile,
    followed: state.profileReducer.followed,
    followersCount: state.profileReducer.followersCount,
    followingCount: state.profileReducer.followingCount
});
export default connect(mapStateToProps, { followUser, unfollowUser })(ProfileCard);
