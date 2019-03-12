import {
  PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE,
  EDIT_PROFILE_FAILURE, EDIT_PROFILE_REQUEST, EDIT_PROFILE_SUCCESS,
} from '../actiontypes';

const initialState = {
  fetched: false,
  profile: {},
};


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        fetched: false,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        fetched: true,
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        fetched: true,
      };
    case EDIT_PROFILE_REQUEST:
      return {
        ...state,
        fetched: false,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        fetched: true,
      };
    case EDIT_PROFILE_FAILURE:
      return {
        ...state,
        fetched: true,
      };
    default:
      return state;
  }
};

export default profileReducer;
