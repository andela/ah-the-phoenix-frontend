import {
  SOCIAL_AUTH_FAILURE,
  SOCIAL_AUTH_REQUEST,
  SOCIAL_AUTH_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../actiontypes";

export const initState = {
  isFetching: false,
  loginSuccess: false
};

export const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        loginSuccess: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        loginSuccess: true,
        user: action.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: action.isFetching,
        loginSuccess: false
      };
    case SOCIAL_AUTH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case SOCIAL_AUTH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        loginSuccess: true
      };
    case SOCIAL_AUTH_FAILURE:
      return {
        ...state,
        isFetching: false,
        loginSuccess: false
      };

    default:
      return state;
  }
};

export default loginReducer;
