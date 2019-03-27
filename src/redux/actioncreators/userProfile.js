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

export const profileSuccess = (payload, followed, followers_total, following_total) => ({
  type: PROFILE_SUCCESS,
  payload,
  followed,
  followers_total,
  following_total
});

export const profileFailure = () => ({
  type: PROFILE_FAILURE
});

export const getProfile = (user_id) => dispatch => {
  dispatch(profileRequest());
  axiosWithToken
    .get("api/v1/profiles/" + user_id)
    .then(res => {
      const user = JSON.parse(localStorage.getItem("user"));
      let followed = res.data.user.followers.filter(u => u.user_id === user.user_id)
      if (followed.length > 0) {
        followed = true
      } else {
        followed = false
      }
      const followers_total = res.data.user.followers_total
      const following_total = res.data.user.following_total
      dispatch(profileSuccess(res.data.user, followed, followers_total, following_total));
      toastr.success("Success", "Profile retrieved successfully");
    })
    .catch(err => {
      dispatch(profileFailure());
      toastr.error("Profile retrieval failed", "Profile failed. Check details");
    });
};
