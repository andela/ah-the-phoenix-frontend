import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../redux/actioncreators/userProfile';
import ProfileCard from '../components/Profile/ProfileCard';
import Loader from '../components/Loader/Loader';


export class Profile extends Component {
  componentDidMount() {
    const { getProfile } = this.props;
    getProfile();
  }

  render() {
    const { isFetching } = this.props;
    if (isFetching === true) {
      return (
        <div>
          <Loader />
        </div>
      );
    }
    return (
      <div>
        <ProfileCard />
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
