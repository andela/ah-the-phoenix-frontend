import {
  SOCIAL_AUTH_FAILURE,
  SOCIAL_AUTH_REQUEST,
  SOCIAL_AUTH_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from "../actiontypes";
import { axiosDefault } from "../../utils/axios_config";
import { toastr } from "react-redux-toastr";

export const socialRequest = () => ({
  type: SOCIAL_AUTH_REQUEST
});

export const socialSuccess = () => ({
  type: SOCIAL_AUTH_SUCCESS
});

export const socialFailure = () => ({
  type: SOCIAL_AUTH_FAILURE
});
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
  isFetching: true
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    isFetching: false,
    user
})

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
  isFetching: false
});

export const sociaLogin = (social_info) => dispatch => {
    dispatch(socialRequest())
    axiosDefault.post('api/v1/social/login/', social_info)
        .then(res => {
            dispatch(socialSuccess())
            localStorage.setItem("user", JSON.stringify(res.data.user));
            window.location.replace('/');
            toastr.success("Welcome! ", "Success login");
        })
        .catch(error => {
            dispatch(socialFailure())
            toastr.error("Error!", "Failed, try again")
        })
}


export const login = (login_data) => dispatch => {
    dispatch(loginRequest())
    axiosDefault.post('api/v1/users/login/', login_data)
        .then(res => {
            toastr.success("Welcome! " + res.data.user.username)
            dispatch(loginSuccess(res.data.user))
        })
        .catch(error => {
            toastr.error("Error!", "Check your input details")
            dispatch(loginFailure())
        })
}
