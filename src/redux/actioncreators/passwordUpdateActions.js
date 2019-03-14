import { toastr } from 'react-redux-toastr';
import { axiosDefault } from '../../utils/axios_config';
import { PWD_UPDATE_FAILURE, PWD_UPDATE_SUCCESS, PWD_UPDATE_REQUEST } from '../actiontypes';

const updateSuccess = () => ({ type: PWD_UPDATE_SUCCESS, fetching: false });
const updateFailure = () => ({ type: PWD_UPDATE_FAILURE, fetching: false });
const updateRequest = () => ({ type: PWD_UPDATE_REQUEST, fetching: true });

export const PasswordUpdate = (password, confirmPassword) => (dispatch) => {
  const urlArray = window.location.href.split('/');
  const token = urlArray[urlArray.length - 1];
  dispatch(updateRequest());
  axiosDefault.put(`api/v1/users/password_update/${token}`, { password, confirm_password: confirmPassword })
    .then((res) => {
      dispatch(updateSuccess());
      toastr.success('password updated', res.data.message);
    })
    .catch((error) => {
      dispatch(updateFailure());
      toastr.error('error', 'link expired');
    });
};

export default PasswordUpdate;
