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
    const { fetched } = this.props;
    if (!fetched) {
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
  fetched: state.profileReducer.fetched,
  profile: state.profileReducer.profile,
});

export default connect(mapStateToProps, {
  getProfile,
})(Profile);
