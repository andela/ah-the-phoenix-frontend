import {
  SUBSCRIBE_FAILURE,
  SUBSCRIBE_REQUEST,
  SUBSCRIBE_SUCCESS,
  UNSUBSCRIBE_FAILURE,
  UNSUBSCRIBE_REQUEST,
  UNSUBSCRIBE_SUCCESS
} from "../actiontypes";

export const initState = {
  isFetching: false,
  subscribeSuccess: false,
  unsubscribeSuccess: false
};

export const subscriptionReducer = (state = initState, action) => {
  switch (action.type) {
    case SUBSCRIBE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case SUBSCRIBE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        subscribeSuccess: true,
        payload: action.payload
      };
    case SUBSCRIBE_FAILURE:
      return {
        ...state,
        isFetching: false,
        subscribeFailure: true
      };
    case UNSUBSCRIBE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case UNSUBSCRIBE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        unsubscribeSuccess: true
      };
    case UNSUBSCRIBE_FAILURE:
      return {
        ...state,
        isFetching: false,
        unsubscribeSuccess: false
      };

    default:
      return state;
  }
};

export default subscriptionReducer;
