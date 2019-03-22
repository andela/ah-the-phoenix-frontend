import {
    LIKE_ARTICLE_REQUEST, LIKE_ARTILE_FAILURE, LIKE_ARTICLE_SUCCESS, DISLIKE_ARTICLE_REQUEST, DISLIKE_ARTICLE_SUCCESS, DISLIKE_ARTILE_FAILURE
} from "../actiontypes";
import { axiosWithToken } from "../../utils/axios_config";

export const likeRequest = () => ({
    type: LIKE_ARTICLE_REQUEST
});

export const likeSuccess = (payload) => ({
    type: LIKE_ARTICLE_SUCCESS,
    payload
});

export const likeFailure = () => ({
    type: LIKE_ARTILE_FAILURE
});
export const dislikeRequest = () => ({
    type: DISLIKE_ARTICLE_REQUEST
});

export const dislikeSuccess = (payload) => ({
    type: DISLIKE_ARTICLE_SUCCESS,
    payload
})

export const dislikeFailure = () => ({
    type: DISLIKE_ARTILE_FAILURE
});


export const likeFunction = () => dispatch => {
    const urlArray = window.location.href.split('/');
    const slug = urlArray[urlArray.length - 1];
    dispatch(likeRequest())
    axiosWithToken.patch('api/v1/articles/' + slug + "/like/")
        .then(res => {
            dispatch(likeSuccess(res.data))
        })
        .catch(error => {
            dispatch(likeFailure())
        })
}


export const dislikeFunction = () => dispatch => {
    const urlArray = window.location.href.split('/');
    const slug = urlArray[urlArray.length - 1];
    dispatch(dislikeRequest())
    axiosWithToken.patch('api/v1/articles/' + slug + "/dislike/")
        .then(res => {
            dispatch(dislikeSuccess(res.data))
        })
        .catch(error => {
            dispatch(dislikeFailure())
        })
}
