import { GET_BOOKMARKED_FAILURE, GET_BOOKMARKED_SUCCESS, GET_BOOKMARKED_REQUEST } from '../actiontypes';
import { axiosWithToken } from '../../utils/axios_config';

export const getBookmarkedSuccess = articles => ({ type: GET_BOOKMARKED_SUCCESS, articles, fetching: false });
export const getBookmarkedFailure = () => ({ type: GET_BOOKMARKED_FAILURE, fetching: false });
export const getBookmarkedRequest = () => ({ type: GET_BOOKMARKED_REQUEST, fetching: true });

export const getBookmarked = () => (dispatch) => {
  dispatch(getBookmarkedRequest());
  axiosWithToken.get('api/v1/favorites')
    .then((res) => {
      dispatch(getBookmarkedSuccess(res.data.favorites.reverse()));
    })
    .catch((error) => {
      dispatch(getBookmarkedFailure());
    });
};
