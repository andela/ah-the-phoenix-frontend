import { GET_ARTICLES_FAILURE, GET_ARTICLES_SUCCESS, GET_ARTICLES_REQUEST } from '../actiontypes';
import { axiosDefault } from '../../utils/axios_config';

const getArticlesSuccess = articles => ({ type: GET_ARTICLES_SUCCESS, articles, fetching: false });
const getArticlesFailure = () => ({ type: GET_ARTICLES_FAILURE, fetching: false });
const getArticlesRequest = () => ({ type: GET_ARTICLES_REQUEST, fetching: true });

export const getArticles = () => (dispatch) => {
  dispatch(getArticlesRequest());
  axiosDefault.get('api/v1/articles/')
    .then((res) => {
      dispatch(getArticlesSuccess(res.data.article.Articles.reverse()));
    })
    .catch((error) => {
      dispatch(getArticlesFailure());
    });
};
