import {
  GET_RATING_FAILURE,
  GET_RATING_REQUEST,
  GET_RATING_SUCCESS
} from "../actiontypes";
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
  axiosDefault
    .get("api/v1/rate/" + slug)
    .then(res => {
      dispatch(ratingSuccess(res.data.data));
    })
    .catch(err => {
      dispatch(ratingFailure());
    });
};
