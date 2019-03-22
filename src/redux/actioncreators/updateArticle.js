import { UPDATE_ARTICLE_FAILURE, UPDATE_ARTICLE_REQUEST, UPDATE_ARTICLE_SUCCESS } from '../actiontypes'
import { axiosWithToken } from '../../utils/axios_config'
import { toastr } from 'react-redux-toastr'

export const updateArticleRequest = () => ({
    type: UPDATE_ARTICLE_REQUEST
})
export const updateArticleSuccess = () => ({
    type: UPDATE_ARTICLE_SUCCESS
})
export const updateArticleFailure = () => ({
    type: UPDATE_ARTICLE_FAILURE
})

export const updateArticle = (article_slug, payload) => dispatch => {
    dispatch(updateArticleRequest())
    axiosWithToken.patch("api/v1/articles/" + article_slug + "/", payload)
        .then(res => {
            dispatch(updateArticleSuccess())
            window.location.replace(`/articles/${article_slug}`);
            toastr.success("Success", "Article successfully updated!")
        })
        .catch(error => {
            dispatch(updateArticleFailure())
            toastr.error("Error", "Article not updated!")
        })
}