import { toastr } from "react-redux-toastr";
import {
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE
} from "../actiontypes";
import { axiosWithToken } from "../../utils/axios_config";

export const profileRequest = () => ({
  type: PROFILE_REQUEST
});

export const profileSuccess = payload => ({
  type: PROFILE_SUCCESS,
  payload
});

export const profileFailure = () => ({
  type: PROFILE_FAILURE
});

export const getProfile = () => dispatch => {
  dispatch(profileRequest());
  axiosWithToken
    .get("api/v1/user/")
    .then(res => {
      dispatch(profileSuccess(res.data.user));
      toastr.success("Success", "Profile retrieved successfully");
    })
    .catch(err => {
      dispatch(profileFailure());
      toastr.error("Profile retrieval failed", "Profile failed. Check details");
    });
};
