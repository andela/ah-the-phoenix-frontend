import { toastr } from 'react-redux-toastr';
import { RESET_FAILURE, RESET_SUCCESS, RESET_REQUEST } from '../actiontypes';
import { axiosDefault } from '../../utils/axios_config';

export const resetSuccess = () => ({ type: RESET_SUCCESS, fetching: false });
export const resetFailure = () => ({ type: RESET_FAILURE, fetching: false });
export const resetRequest = () => ({ type: RESET_REQUEST, fetching: true });

export const PasswordReset = email => (dispatch) => {
  dispatch(resetRequest());
  axiosDefault.post('api/v1/users/password_reset/', { email })
    .then((res) => {
      dispatch(resetSuccess());
      toastr.success('Email Sent', res.data.user.message);
    })
    .catch((error) => {
      dispatch(resetFailure());
      toastr.error('User Not Found', 'A user with the given email was not found');
    });
};

export default PasswordReset;
