import {
  UNSUBSCRIBE_FAILURE,
  UNSUBSCRIBE_REQUEST,
  UNSUBSCRIBE_SUCCESS
} from "../actiontypes";

import { toastr } from "react-redux-toastr";
import { axiosWithToken } from "../../utils/axios_config";

export const unsubscribeRequest = () => ({
  type: UNSUBSCRIBE_REQUEST
});

export const unsubscribeSuccess = () => ({
  type: UNSUBSCRIBE_SUCCESS
});

export const unsubscribeFailure = () => ({
  type: UNSUBSCRIBE_FAILURE
});

export const unsubscribeNotifications = uuid => dispatch => {
  dispatch(unsubscribeRequest());
  axiosWithToken
    .put(`api/v1/users/unsubscribe/${uuid}/`)
    .then(res => {
      dispatch(unsubscribeSuccess());
      window.location.replace("/");
      toastr.success(
        "Success!",
        "You have successfully unsubscribed from notifications"
      );
      window.location.replace("/");
    })
    .catch(error => {
      dispatch(unsubscribeFailure());
      toastr.error("Error!", "An error occurred during unsubscription");
    });
};
