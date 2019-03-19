import { GET_ARTICLES_FAILURE, GET_ARTICLES_SUCCESS, GET_ARTICLES_REQUEST } from '../actiontypes';

const initialState = {
    fetching: false,
    articles: []
};

export const listArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES_FAILURE:
            return {
                ...state,
                fetching: action.fetching,
            }
        case GET_ARTICLES_REQUEST:
            return {
                ...state,
                fetching: action.fetching,
            }
        case GET_ARTICLES_SUCCESS:
            return {
                ...state,
                fetching: action.fetching,
                articles: action.articles
            }
        default:
            return state;
    }
}
