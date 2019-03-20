import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actioncreators/userProfile';
import ProfileCard from '../../components/Profile/ProfileCard';
import Loader from '../../components/Loader/Loader';
import { Container, Divider } from 'semantic-ui-react';
import ProfileMenu from '../../components/Profile/ProfileMenu'


export class Profile extends Component {
  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  render() {
    const { isFetching, profile } = this.props;
    if (isFetching === true) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
      <div>
        <Container>
          <ProfileCard />
          <Divider />
          <ProfileMenu author_id={profile.username} />
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isFetching: state.profileReducer.isFetching,
  profile: state.profileReducer.profile
});

export default connect(mapStateToProps, {
  getProfile,
})(Profile);
