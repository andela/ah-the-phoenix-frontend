import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Card, Image, Grid, Icon, Button, Label, Header
} from 'semantic-ui-react';
import './profile.scss';

export class ProfileCard extends Component {
    render() {
        const { profile } = this.props;

        const profileCard = () => (Object.keys(profile).length !== 0 ? (
            <Card className="profile-card">
                <Grid className="profile-grid">
                    <Grid.Column width={5}>
                        <Image src={profile.image.slice(13)} size="small" style={{ height: "150px", width: "150px" }} circular />
                    </Grid.Column>
                    <Grid.Column width={8}>
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
                        <Card.Content extra>
                            <Label color="teal">
                                <Icon name="user" />
                                Followers:
                <Label.Detail>{profile.followers_total}</Label.Detail>
                            </Label>
                            <Label color="teal">
                                <Icon name="user" />
                                Following:
                <Label.Detail>{profile.following_total}</Label.Detail>
                            </Label>
                        </Card.Content>
                    </Grid.Column>
                    <Grid.Column>
                        <Card.Content>
                            <Button as={Link} color="blue" to="/edit_profile"><Icon name="edit" className="edit-profile" /></Button>
                        </Card.Content>
                    </Grid.Column>
                </Grid>

            </Card>


        )

            : (
                null
            ));
        return (
            <div className="profile-div">
                {profileCard()}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    profile: state.profileReducer.profile,
});
export default connect(mapStateToProps)(ProfileCard);
