import {
  GET_ARTICLE_FAILURE, GET_ARTICLE_SUCCESS, GET_ARTICLE_REQUEST,
  LIKE_ARTICLE_REQUEST, DISLIKE_ARTICLE_REQUEST
} from '../actiontypes';
import { axiosDefault, axiosWithToken } from '../../utils/axios_config';

const getArticleSuccess = article => ({ type: GET_ARTICLE_SUCCESS, article, fetching: false });
const getArticleFailure = () => ({ type: GET_ARTICLE_FAILURE, fetching: false });
const getArticleRequest = () => ({ type: GET_ARTICLE_REQUEST, fetching: true });
export const likeRequest = () => ({
  type: LIKE_ARTICLE_REQUEST
});
export const dislikeRequest = () => ({
  type: DISLIKE_ARTICLE_REQUEST
});

export const getArticle = () => (dispatch) => {
  const urlArray = window.location.href.split('/');
  const slug = urlArray[urlArray.length - 1];
  dispatch(getArticleRequest());
  axiosDefault.get('api/v1/articles/' + slug + '/')
    .then((res) => {
      dispatch(getArticleSuccess(res.data.article));
    })
    .catch((error) => {
      dispatch(getArticleFailure());
    });
};


export const likeFunction = () => dispatch => {
  const urlArray = window.location.href.split('/');
  const slug = urlArray[urlArray.length - 1];
  dispatch(likeRequest());
  axiosWithToken.patch('api/v1/articles/' + slug + "/like/")
    .then(res => {
      dispatch(getArticleSuccess(res.data));
    })
    .catch(error => {
      dispatch(getArticleFailure());
    })
}


export const dislikeFunction = () => dispatch => {
  const urlArray = window.location.href.split('/');
  const slug = urlArray[urlArray.length - 1];
  dispatch(dislikeRequest());
  axiosWithToken.patch('api/v1/articles/' + slug + "/dislike/")
    .then(res => {
      dispatch(getArticleSuccess(res.data));
    })
    .catch(error => {
      dispatch(getArticleFailure());
    })
}
