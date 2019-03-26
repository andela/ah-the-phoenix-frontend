import {
    FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS,
    UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS
} from '../actiontypes'
import { toastr } from 'react-redux-toastr';
import { axiosWithToken } from '../../utils/axios_config'

export const followRequest = () => ({
    type: FOLLOW_REQUEST
})
export const followSuccess = () => ({
    type: FOLLOW_SUCCESS
})
export const followFailure = () => ({
    type: FOLLOW_FAILURE
})

export const unfollowRequest = () => ({
    type: UNFOLLOW_REQUEST
})
export const unfollowSuccess = () => ({
    type: UNFOLLOW_SUCCESS
})
export const unfollowFailure = () => ({
    type: UNFOLLOW_FAILURE
})

export const followUser = (user_id) => dispatch => {
    dispatch(followRequest())
    axiosWithToken.post('api/v1/profiles/' + user_id + '/follow/')
        .then(res => {
            dispatch(followSuccess())
        })
        .catch(err => {
            dispatch(followFailure())
            toastr.error("Follow request failed", "User might be unverified")
        })
}

export const unfollowUser = (user_id) => dispatch => {
    dispatch(unfollowRequest())
    axiosWithToken.delete('api/v1/profiles/' + user_id + '/follow/')
        .then(res => {
            dispatch(unfollowSuccess())
        })
        .catch(err => {
            dispatch(unfollowFailure())
            toastr.error("Unfollow request failed")
        })
}