import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Card, Image, Grid, Icon, Button, Label,
} from 'semantic-ui-react';
import './profile.scss';

export class ProfileCard extends Component {
    render() {
        const { profile } = this.props;
        console.log(profile);

        const profileCard = () => (Object.keys(profile).length !== 0 ? (
            <Card className="profile-card">
                <Grid className="profile-grid">
                    <Grid.Column width={4}>
                        <Image src={profile.image.slice(13)} size="small" />
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Card.Content>
                            <Card.Header as="h2">
                                Name:
                {profile.username}
                            </Card.Header>
                            <Card.Description as="h4">
                                Bio:
                {profile.bio}
                            </Card.Description>
                        </Card.Content>
                        <br />
                        <Card.Content extra>
                            <Label>
                                <Icon name="user" />
                                Followers:
                <Label.Detail>{profile.followers_total}</Label.Detail>
                            </Label>
                            <Label>
                                <Icon name="user" />
                                Following:
                <Label.Detail>{profile.following_total}</Label.Detail>
                            </Label>
                        </Card.Content>
                    </Grid.Column>
                    <Grid.Column>
                        <Card.Content>
                            <Button as={Link} to="/edit_profile"><Icon name="edit" className="edit-profile" /></Button>
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
