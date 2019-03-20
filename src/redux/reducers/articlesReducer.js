import {
  DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS,
  UPDATE_ARTICLE_FAILURE, UPDATE_ARTICLE_REQUEST, UPDATE_ARTICLE_SUCCESS
} from "../actiontypes";

const initState = {
  isFetching: false,
  articles: []
};

export const articleReducer = (state = initState, action) => {
  switch (action.type) {
    case DELETE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case DELETE_SUCCESS:
      const newState = state.articles.filter(
        article => article.slug !== action.article_slug
      );
      return {
        ...state,
        isFetching: false,
        articles: newState
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case UPDATE_ARTICLE_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        articles: state.articles.filter(article => article.id !== action.article_id)
      }
    case UPDATE_ARTICLE_FAILURE:
      return {
        ...state,
        isFetching: false
      }

    default:
      return state;
  }
};

export default articleReducer;
