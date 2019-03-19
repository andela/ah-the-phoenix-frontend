import { GET_ARTICLE_FAILURE, GET_ARTICLE_SUCCESS, GET_ARTICLE_REQUEST } from '../actiontypes';

const initialState = {
    fetching: false,
    article: {}
};

export const getArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLE_FAILURE:
            return {
                ...state,
                fetching: action.fetching,
            }
        case GET_ARTICLE_REQUEST:
            return {
                ...state,
                fetching: action.fetching,
            }
        case GET_ARTICLE_SUCCESS:
            return {
                ...state,
                fetching: action.fetching,
                article: action.article
            }
        default:
            return state;
    }
}
