import { SOCIAL_AUTH_FAILURE, SOCIAL_AUTH_REQUEST, SOCIAL_AUTH_SUCCESS } from '../actiontypes';
import { axiosDefault } from '../../utils/axios_config';
import { toastr } from 'react-redux-toastr'

const socialRequest = () => ({
    type: SOCIAL_AUTH_REQUEST,
    isFetching: true
})

const socialSuccess = () => ({
    type: SOCIAL_AUTH_SUCCESS,
    isFetching: false
})

const socialFailure = () => ({
    type: SOCIAL_AUTH_FAILURE,
    isFetching: false
})

export const sociaLogin = (social_info) => dispatch => {
    dispatch(socialRequest())
    axiosDefault.post('api/v1/social/login/', social_info)
        .then(res => {
            dispatch(socialSuccess())
            toastr.success("Welcome! ", "Success login");
        })
        .catch(error => {
            dispatch(socialFailure())
            toastr.error("Error!", "Failed, try again")
        })
}