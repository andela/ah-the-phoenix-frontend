import {
  POST_RATING_SUCCESS,
  POST_RATING_REQUEST,
  POST_RATING_FAILURE
} from "../actiontypes";
import { axiosWithToken } from "../../utils/axios_config";

export const ratingRequest = () => ({
  type: POST_RATING_REQUEST
});

export const ratingSuccess = rating => ({
  type: POST_RATING_SUCCESS,
  rating
});

export const ratingFailure = () => ({
  type: POST_RATING_FAILURE
});

export const rateArticle = rating => dispatch => {
  const urlArray = window.location.href.split("/");
  const slug = urlArray[urlArray.length - 1];
  dispatch(ratingRequest());
  axiosWithToken
    .post("api/v1/rate/" + slug + "/", { user_rating: rating })
    .then(res => {
      dispatch(ratingSuccess(res.data.data));
    })
    .catch(err => {
      dispatch(ratingFailure());
    });
};
