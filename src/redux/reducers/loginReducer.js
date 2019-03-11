import {
    SOCIAL_AUTH_FAILURE, SOCIAL_AUTH_REQUEST, SOCIAL_AUTH_SUCCESS, LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGIN_FAILURE
} from '../actiontypes';

const initState = {
    isFetching: false,
    loginSuccess: false
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: action.isFetching,
                loginSuccess: true,
                payload: action.payload
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: action.isFetching,
                error: action.payload
            }
        case SOCIAL_AUTH_REQUEST:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SOCIAL_AUTH_SUCCESS:
            return {
                ...state,
                isFetching: action.isFetching,
                loginSuccess: true
            }
        case SOCIAL_AUTH_FAILURE:
            return {
                ...state,
                isFetching: action.isFetching,
                loginSuccess: false
            }

        default:
            return state;
    }
}

export default loginReducer