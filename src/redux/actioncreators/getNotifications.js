import {
    GET_NOTIFICATIONS_FAILURE,
    GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_REQUEST,
    GET_SINGLE_NOTIFICATION_FAILURE, GET_SINGLE_NOTIFICATION_REQUEST
} from '../actiontypes';
import { axiosWithToken } from '../../utils/axios_config';
import { toastr } from 'react-redux-toastr'

export const getSingleNotificationFailure = () => ({ type: GET_SINGLE_NOTIFICATION_FAILURE });
export const getSingleNotificationRequest = () => ({ type: GET_SINGLE_NOTIFICATION_REQUEST });

export const getNotificationsSuccess = notification => ({ type: GET_NOTIFICATIONS_SUCCESS, notification });
export const getNotificationsFailure = () => ({ type: GET_NOTIFICATIONS_FAILURE });
export const getNotificationsRequest = () => ({ type: GET_NOTIFICATIONS_REQUEST });

export const getNotifications = () => (dispatch) => {

    dispatch(getNotificationsRequest());
    axiosWithToken.get('api/v1/notifications/')
        .then((res) => {
            dispatch(getNotificationsSuccess(res.data.notifications));
        })
        .catch((error) => {
            dispatch(getNotificationsFailure());
        });
};

export const getSingleNotification = (id) => (dispatch) => {
    dispatch(getSingleNotificationRequest());
    axiosWithToken.get('api/v1/notifications/' + id)
        .then((res) => {
            if (res.data.notifications.action_object) {
                window.location.replace(`/articles/${res.data.notifications.action_object.slug}`);
            }
            else {
                toastr.error("The article you are trying to view was moved");
                setTimeout(() => { window.location.replace(`/notifications`); }, 3000);
            }

        })
        .catch((error) => {
            dispatch(getSingleNotificationFailure());
        });
};
