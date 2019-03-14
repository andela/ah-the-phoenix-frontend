import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actiontypes'

const initState = {
    isFetching: false
}

export const signupReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isFetching: false

            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                isFetching: false,
            }
        default:
            return state;
    }
}