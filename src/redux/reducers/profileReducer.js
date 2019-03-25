import {
  PROFILE_REQUEST, PROFILE_SUCCESS, PROFILE_FAILURE,
  EDIT_PROFILE_FAILURE, EDIT_PROFILE_REQUEST, EDIT_PROFILE_SUCCESS,
  FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS,
  UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS
} from '../actiontypes';

const initialState = {
  isFetching: false,
  profile: {},
  followed: null,
  followersCount: null,
  followingCount: null,
  isFollowing: false
};


export const profileReducer = (state = initialState, action) => {
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
        followed: action.followed,
        followersCount: action.followers_total,
        followingCount: action.following_total
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
    case FOLLOW_REQUEST:
      return {
        ...state,
        isFollowing: true,
      };
    case FOLLOW_SUCCESS:
      return {
        ...state,
        isFollowing: false,
        followed: true,
        followersCount: state.followersCount + 1
      };
    case FOLLOW_FAILURE:
      return {
        ...state,
        isFollowing: false,
      };
    case UNFOLLOW_REQUEST:
      return {
        ...state,
        isFollowing: true,
      };
    case UNFOLLOW_SUCCESS:
      return {
        ...state,
        followed: false,
        followersCount: state.followersCount - 1,
        isFollowing: false,
      };
    case UNFOLLOW_FAILURE:
      return {
        ...state,
        isFollowing: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
