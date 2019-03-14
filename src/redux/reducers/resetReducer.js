import { RESET_FAILURE, RESET_SUCCESS, RESET_REQUEST } from '../actiontypes';

const initialState = {
  fetching: false,
};

export const resetReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_REQUEST:
      return {
        ...state,
        fetching: action.fetching,
      };
    case RESET_SUCCESS:
      return {
        ...state,
        fetching: action.fetching,
      };
    case RESET_FAILURE:
      return {
        ...state,
        fetching: action.fetching,
      };
    default:
      return state;
  }
};
