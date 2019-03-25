import {
  GET_RATING_FAILURE,
  GET_RATING_REQUEST,
  GET_RATING_SUCCESS,
  POST_RATING_FAILURE,
  POST_RATING_REQUEST,
  POST_RATING_SUCCESS
} from "../actiontypes";

const initState = {
  isFetching: false,
  user_rating: null,
  average_rating: null
};

export const ratingsReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_RATING_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case POST_RATING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        average_rating: action.rating.average_rating,
        user_rating: action.rating.user_rating
      };
    case POST_RATING_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case GET_RATING_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_RATING_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user_rating: action.rating.user_rating,
        average_rating: action.rating.average_rating
      };
    case GET_RATING_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
};

export default ratingsReducer;
