import {
  PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE,
  EDIT_PROFILE_FAILURE, EDIT_PROFILE_REQUEST, EDIT_PROFILE_SUCCESS,
} from '../actiontypes';

const initialState = {
  isFetching: false,
  profile: {}
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isFetching: false,
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case EDIT_PROFILE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isFetching: false,
      };
    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
