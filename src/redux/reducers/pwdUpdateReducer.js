import { PWD_UPDATE_FAILURE, PWD_UPDATE_SUCCESS, PWD_UPDATE_REQUEST } from '../actiontypes';

export const initialState = {
  fetching: false,
};

export const pwdUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case PWD_UPDATE_REQUEST:
      return {
        ...state,
        fetching: action.fetching,
      };
    case PWD_UPDATE_SUCCESS:
      return {
        ...state,
        fetching: action.fetching,
        redirect: true,
      };
    case PWD_UPDATE_FAILURE:
      return {
        ...state,
        fetching: action.fetching,
      };
    default:
      return state;
  }
};
