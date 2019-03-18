import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actiontypes'
import { toastr } from 'react-redux-toastr'
import { axiosDefault } from '../../utils/axios_config'


export const signupRequest = () => ({
    type: SIGNUP_REQUEST
});

export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS
});

export const signupFailure = () => ({
    type: SIGNUP_FAILURE
});

export const signupFunction = (userData) => dispatch => {
    dispatch(signupRequest());
    axiosDefault.post(`api/v1/users/`, { "user": userData },
    )
        .then(res => {
            dispatch(signupSuccess());
            toastr.success('Success signup', res.data.user.message)
        })
        .catch(err => {
            let er = JSON.parse(err.request.response)
            dispatch(signupFailure());
            er.errors.email ? toastr.error('Failed to signup', er.errors.email[0]) : toastr.error('Error in signup', er.errors.username[0])
        })
}

export default signupFunction;