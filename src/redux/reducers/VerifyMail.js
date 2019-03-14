import {
    EMAIL_VERIFY_FAILURE, EMAIL_VERIFY_SUCCESS, EMAIL_VERIFY_REQUEST
} from '../actiontypes';

const initState = {
    isFetching: false,
    error: {
        message:"",
        error:""
    }
}

const verifyReducer = (state = initState, action) => {
    switch (action.type) {
        case EMAIL_VERIFY_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case EMAIL_VERIFY_SUCCESS:
            return {
                ...state,
                verify: true,
                isFetching: false
            }
        case EMAIL_VERIFY_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }

        default:
            return state;
    }
}

export default verifyReducer;