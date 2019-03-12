import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE } from '../actiontypes';


export const profileRequest = () => ({
  type: PROFILE_REQUEST,
});

export const profileSuccess = payload => ({
  type: PROFILE_SUCCESS,
  payload,
});

export const profileFailure = () => ({
  type: PROFILE_FAILURE,
});

export const getProfile = () => (dispatch) => {
  console.log(localStorage.getItem('token'));
  dispatch(profileRequest());
  axios.get('https://cors-anywhere.herokuapp.com/https://ah-the-phoenix-staging.herokuapp.com/api/v1/user/', {
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`,
      'Content-type': 'application/json',
    },

  })
    .then((res) => {
      console.log(res);
      dispatch(profileSuccess(res.data.user));
      toastr.success('Success', 'Profile retrieved successfully');
    })
    .catch((err) => {
      console.log(err.response);
      dispatch(profileFailure());
      toastr.error('Profile retrieval failed', 'Profile failed. Check details');
    });
};
