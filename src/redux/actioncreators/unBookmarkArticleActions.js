import {UN_BOOKMARK_ARTICLE_FAILURE, UN_BOOKMARK_ARTICLE_REQUEST, UN_BOOKMARK_ARTICLE_SUCCESS} from "../actiontypes";
import {axiosWithToken} from "../../utils/axios_config";
import { toastr } from "react-redux-toastr";
import { getBookmarkedSuccess } from "./listBookmarkedArticles";


export const unBookmarkArticleSuccess = () => ({type: UN_BOOKMARK_ARTICLE_SUCCESS, fetching: false})

export const unBookmarkArticleFailure = () => ({type: UN_BOOKMARK_ARTICLE_FAILURE, fetching: false})

export const unBookmarkArticleRequest = () => ({type: UN_BOOKMARK_ARTICLE_REQUEST, fetching: true})

export const unBookmarkArticle = () => dispatch => {
    dispatch(unBookmarkArticleRequest())
    const urlArray = window.location.href.split('/');
    const slug = urlArray[urlArray.length - 1];
    axiosWithToken.delete("api/v1/articles/" + slug + "/favorite")
        .then(res => {
            return axiosWithToken.get('api/v1/favorites')
        })
        .then(res => {
            dispatch(getBookmarkedSuccess(res.data.favorites))
            dispatch(unBookmarkArticleSuccess())
            toastr.success("Success!", "Article removed from the bookmarks");
        })
        .catch(error => {
            dispatch(unBookmarkArticleFailure())
            console.log(error);
        })
}