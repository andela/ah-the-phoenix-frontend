import {
  GET_RATING_FAILURE,
  GET_RATING_REQUEST,
  GET_RATING_SUCCESS
} from "../actiontypes";
import { toastr } from "react-redux-toastr";
import { axiosWithToken, axiosDefault } from "../../utils/axios_config";

export const ratingRequest = () => ({
  type: GET_RATING_REQUEST
});

export const ratingSuccess = rating => ({
  type: GET_RATING_SUCCESS,
  rating
});

export const ratingFailure = () => ({
  type: GET_RATING_FAILURE
});

export const averageRating = () => dispatch => {
  const urlArray = window.location.href.split("/");
  const slug = urlArray[urlArray.length - 1];
  dispatch(ratingRequest());
  axiosWithToken
    .get("api/v1/rate/" + slug)
    .then(res => {
      console.log(res.data);
      dispatch(ratingSuccess(res.data.data));
      toastr.success("Success Rating", "rating retrieved");
    })
    .catch(err => {
      console.log(err.request);
      dispatch(ratingFailure());
      toastr.error("Rating Failed", " Rating retrieval Failed");
    });
};
