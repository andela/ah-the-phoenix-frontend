import { DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE } from "../actiontypes";
import { axiosWithToken } from "../../utils/axios_config";
import { toastr } from "react-redux-toastr";

export const deleteArticleRequest = () => ({
  type: DELETE_REQUEST,
  isFetching: true
});

export const deleteArticleSuccess = article_slug => ({
  type: DELETE_SUCCESS,
  isFetching: false,
  article_slug
});

export const deleteArticleFailure = () => ({
  type: DELETE_FAILURE,
  isFetching: false
});

export const deleteArticle = article_slug => dispatch => {
  dispatch(deleteArticleRequest());
  axiosWithToken
    .delete("api/v1/articles/" + article_slug + "/")
    .then(res => {
      dispatch(deleteArticleSuccess(article_slug));
      toastr.success("Success", "Article deleted successfully");
      window.location.replace("/");
    })
    .catch(error => {
      dispatch(deleteArticleFailure());
      toastr.error("Failed", "The article failed to delete");
    });
};
