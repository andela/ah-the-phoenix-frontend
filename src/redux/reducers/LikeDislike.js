import {
    LIKE_ARTICLE_REQUEST, LIKE_ARTICLE_SUCCESS, LIKE_ARTILE_FAILURE,
    DISLIKE_ARTICLE_REQUEST, DISLIKE_ARTICLE_SUCCESS, DISLIKE_ARTILE_FAILURE
} from "../actiontypes";

const initState = {
    isFetching: false,
    likeSuccess: false,
    dislikeSuccess: false
};

export const likeDislikeReducer = (state = initState, action) => {
    switch (action.type) {
        case LIKE_ARTICLE_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case LIKE_ARTICLE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                likes_count: action.payload.likes_count,
                dislikes_count: action.payload.dislikes_count,
                like_status: action.payload.like_status,
                dislike_status: action.payload.dislike_status,
                likeSuccess: true
            }
        case LIKE_ARTILE_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        case DISLIKE_ARTICLE_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case DISLIKE_ARTICLE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                likes_count: action.payload.likes_count,
                dislikes_count: action.payload.dislikes_count,
                like_status: action.payload.like_status,
                dislike_status: action.payload.dislike_status,
                dislikeSuccess: true
            }
        case DISLIKE_ARTILE_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default:
            return state;
    }
};

export default likeDislikeReducer;
