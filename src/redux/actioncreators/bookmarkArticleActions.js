import { BOOKMARK_ARTICLE_FAILURE, BOOKMARK_ARTICLE_REQUEST, BOOKMARK_ARTICLE_SUCCESS } from "../actiontypes";
import { axiosWithToken } from "../../utils/axios_config";
import { toastr } from "react-redux-toastr";
import { getBookmarkedSuccess } from "./listBookmarkedArticles";

export const bookmarkArticleSuccess = () => ({ type: BOOKMARK_ARTICLE_SUCCESS, fetching: false })

export const bookmarkArticleFailure = () => ({ type: BOOKMARK_ARTICLE_FAILURE, fetching: false })

export const bookmarkArticleRequest = () => ({ type: BOOKMARK_ARTICLE_REQUEST, fetching: true })

export const bookmarkArticle = () => dispatch => {
    dispatch(bookmarkArticleRequest())
    const urlArray = window.location.href.split('/');
    const slug = urlArray[urlArray.length - 1];
    axiosWithToken.put("api/v1/articles/" + slug + "/favorite")
        .then(res => {
            return axiosWithToken.get('api/v1/favorites')
        })
        .then(res => {
            dispatch(getBookmarkedSuccess(res.data.favorites))
            dispatch(bookmarkArticleSuccess());
            toastr.success("Success!", "Article added to bookmarks");
        })
        .catch(error => {
            dispatch(bookmarkArticleFailure())
            console.log(error.request.response);
        })
}