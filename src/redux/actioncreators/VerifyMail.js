import { axiosDefault } from '../../utils/axios_config';
import { EMAIL_VERIFY_FAILURE, EMAIL_VERIFY_SUCCESS, EMAIL_VERIFY_REQUEST } from "../actiontypes";
import { toastr } from 'react-redux-toastr';

const verifySuccess = () => ({ type: EMAIL_VERIFY_SUCCESS })
const verifyFailure = (payload) => ({ type: EMAIL_VERIFY_FAILURE, payload })
const verifyRequest = () => ({ type: EMAIL_VERIFY_REQUEST })

const verifyFunction = () => dispatch => {
    const urlArray = window.location.href.split("/")
    const token = urlArray[urlArray.length - 1]
    dispatch(verifyRequest())
    axiosDefault.get(`api/v1/users/verify/` + token)
        .then(res => {
            dispatch(verifySuccess())
            toastr.success("User verified", "You have been successfully verified kindly login");
        })
        .catch(error => {
            dispatch(verifyFailure(JSON.parse(error.request.response)))
            toastr.error("Verification failed", error.request.error)
        })
}

export default verifyFunction;