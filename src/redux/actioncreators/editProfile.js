import { toastr } from "react-redux-toastr";
import {
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE
} from "../actiontypes";
import { axiosWithToken } from "../../utils/axios_config";

export const editProfileRequest = () => ({
  type: EDIT_PROFILE_REQUEST
});

export const editProfileSuccess = payload => ({
  type: EDIT_PROFILE_SUCCESS,
  payload
});

export const editProfileFailure = () => ({
  type: EDIT_PROFILE_FAILURE
});

export const editProfile = edit_data => dispatch => {
  dispatch(editProfileRequest());
  axiosWithToken
    .put("api/v1/user/", edit_data)
    .then(res => {
      dispatch(editProfileSuccess(res.data.user));
      toastr.success("Success", "Profile updated successfully");
      window.location.replace("/profile");
    })
    .catch(err => {
      dispatch(editProfileFailure());
      toastr.error("Profile edit failed", "Profile edit failed. Check details");
    });
};
