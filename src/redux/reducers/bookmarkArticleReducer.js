import {
    UN_BOOKMARK_ARTICLE_FAILURE, UN_BOOKMARK_ARTICLE_REQUEST, UN_BOOKMARK_ARTICLE_SUCCESS,
    GET_BOOKMARKED_FAILURE, GET_BOOKMARKED_SUCCESS, GET_BOOKMARKED_REQUEST,
    BOOKMARK_ARTICLE_FAILURE, BOOKMARK_ARTICLE_REQUEST, BOOKMARK_ARTICLE_SUCCESS,
} from "../actiontypes";

const initialState = {
    fetching: false,
    articles: []
}

export const bookmarkArticleReducer = (state = initialState, action) => {
    switch (action.type){
        case BOOKMARK_ARTICLE_SUCCESS:
            return {
                ...state,
                fetching: false
            }
        case BOOKMARK_ARTICLE_FAILURE:
            return {
                ...state,
                fetching: false
            }
        case BOOKMARK_ARTICLE_REQUEST:
            return {
                ...state,
                fetching: true
            }
            case GET_BOOKMARKED_SUCCESS:
            return {
                ...state,
                fetching: false,
                articles: action.articles
            }
        case GET_BOOKMARKED_FAILURE:
            return {
                ...state,
                fetching: false
            }
        case GET_BOOKMARKED_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case UN_BOOKMARK_ARTICLE_SUCCESS:
            return {
                ...state,
                fetching: false
            }
        case UN_BOOKMARK_ARTICLE_FAILURE:
            return {
                ...state,
                fetching: false
            }
        case UN_BOOKMARK_ARTICLE_REQUEST:
            return {
                ...state,
                fetching: true
            }

        default:
            return state
    }
}