import {
    CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_REQUEST, CREATE_ARTICLE_FAILURE
} from '../actiontypes';

export const initState = {
    isFetching: false
}

export const createArticleReducer = (state = initState, action) => {
    switch (action.type) {
        case CREATE_ARTICLE_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case CREATE_ARTICLE_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case CREATE_ARTICLE_FAILURE:
            return {
                ...state,
                isFetching: false
            }

        default:
            return state;
    }
}

export default createArticleReducer;