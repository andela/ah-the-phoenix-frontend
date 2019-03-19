import {
  CREATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_REQUEST,
  CREATE_ARTICLE_FAILURE
} from "../actiontypes";
import { axiosWithToken } from "../../utils/axios_config";
import { toastr } from "react-redux-toastr";

export const createArticleRequest = () => ({
  type: CREATE_ARTICLE_REQUEST
});

export const createArticleSuccess = () => ({
  type: CREATE_ARTICLE_SUCCESS
});

export const createArticleFailure = () => ({
  type: CREATE_ARTICLE_FAILURE
});

export const createArticleFunction = article_data => dispatch => {
  dispatch(createArticleRequest());
  axiosWithToken
    .post("api/v1/articles/", article_data)
    .then(res => {
      let slug = res.data.article.slug;
      dispatch(createArticleSuccess());
      window.location.replace(`/articles/${slug}`);
      toastr.success("Success! ", "Successfully created an article");
    })
    .catch(error => {
      dispatch(createArticleFailure());
      toastr.error("Error!", "Failed, to create article");
    });
};
