import {
  SUBSCRIBE_FAILURE,
  SUBSCRIBE_REQUEST,
  SUBSCRIBE_SUCCESS
} from "../actiontypes";
import { toastr } from "react-redux-toastr";
import { axiosWithToken } from "../../utils/axios_config";

export const subscribeRequest = () => ({
  type: SUBSCRIBE_REQUEST
});

export const subscribeSuccess = payload => ({
  type: SUBSCRIBE_SUCCESS,
  payload
});

export const subscribeFailure = payload => ({
  type: SUBSCRIBE_FAILURE
});

export const subscribeNotifications = () => dispatch => {
  dispatch(subscribeRequest());
  axiosWithToken
    .put("api/v1/users/subscribe/")
    .then(res => {
      dispatch(subscribeSuccess(res.data.Message));
      toastr.success("Success!", res.data.Message);
    })
    .catch(error => {
      dispatch(subscribeFailure());
      toastr.error("Error!", "Subscription failed");
    });
};
