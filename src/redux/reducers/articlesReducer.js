import {
  DELETE_FAILURE, DELETE_REQUEST, DELETE_SUCCESS,
  UPDATE_ARTICLE_FAILURE, UPDATE_ARTICLE_REQUEST, UPDATE_ARTICLE_SUCCESS,
  CREATE_ARTICLE_SUCCESS, CREATE_ARTICLE_REQUEST, CREATE_ARTICLE_FAILURE,
  GET_ARTICLE_FAILURE, GET_ARTICLE_SUCCESS, GET_ARTICLE_REQUEST,
  GET_ARTICLES_FAILURE, GET_ARTICLES_SUCCESS, GET_ARTICLES_REQUEST
} from "../actiontypes";

const initState = {
  isFetching: false,
  articles: [],
  article: {},
  liked: null,
  disliked: null,
};

export const articleReducer = (state = initState, action) => {
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
    case GET_ARTICLE_FAILURE:
      return {
        ...state,
        isFetching: action.fetching,
      }
    case GET_ARTICLE_REQUEST:
      return {
        ...state,
        article: {},
        liked: null,
        disliked: null,
        isFetching: action.fetching,
      }
    case GET_ARTICLE_SUCCESS:
      const user = JSON.parse(localStorage.getItem("user"))
      if (user) {
        let likedbyuser = action.article.liked_by.filter(user_liked => user_liked === user.user_id)
        let dislikedbyuser = action.article.disliked_by.filter(user_disliked => user_disliked === user.user_id)
        return {
          ...state,
          isFetching: action.fetching,
          article: action.article,
          liked: likedbyuser.length > 0,
          disliked: dislikedbyuser.length > 0,
          likes_count: action.article.likes_count,
          dislikes_count: action.article.dislikes_count
        }
      }
      return {
        ...state,
        isFetching: action.fetching,
        article: action.article
      }

    case GET_ARTICLES_FAILURE:
      return {
        ...state,
        isFetching: action.fetching,
      }
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        isFetching: action.fetching,
      }
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        isFetching: action.fetching,
        articles: action.articles,
      }
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
        isFetching: false
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
