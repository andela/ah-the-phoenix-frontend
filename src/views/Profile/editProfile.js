import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/actioncreators/userProfile';
import EditProfileForm from '../../components/Profile/EditProfileForm';
import Loader from '../../components/Loader/Loader';

export class EditProfile extends Component {
  componentDidMount() {
    const user_id = this.props.match.params.user_id
    const { getProfile } = this.props
    getProfile(user_id)
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
        <EditProfileForm />
      </div>

    );
  }
}
const mapStateToProps = state => ({
  isFetching: state.profileReducer.isFetching
});


export default connect(mapStateToProps, { getProfile })(EditProfile);
