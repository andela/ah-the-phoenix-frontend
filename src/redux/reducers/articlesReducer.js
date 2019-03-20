import { DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS } from "../actiontypes";

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
    default:
      return state;
  }
};

export default articleReducer;
