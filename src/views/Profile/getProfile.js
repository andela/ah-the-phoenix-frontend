import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actioncreators/userProfile';
import ProfileCard from '../../components/Profile/ProfileCard';
import Loader from '../../components/Loader/Loader';
import { Container, Divider } from 'semantic-ui-react';
import ProfileMenu from '../../compxonents/Profile/ProfileMenu'
import './Profile.scss'


export class Profile extends Component {
  componentDidMount() {
    const user_id = this.props.match.params.user_id
    const { getProfile } = this.props;
    getProfile(user_id);
  }

  render() {
    const user_id = this.props.match.params.user_id
    const { isFetching, profile } = this.props;
    if (isFetching === true) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
      <div className="profile-page">
        <Container>
          <ProfileCard profile={profile} user_id={user_id} />
          <Divider />
          <ProfileMenu author_id={profile.username} profile={profile} />
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isFetching: state.profileReducer.isFetching,
  profile: state.profileReducer.profile
});

export default connect(
  mapStateToProps,
  {
    getProfile
  }
)(Profile);
