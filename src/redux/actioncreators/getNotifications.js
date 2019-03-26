import {
    GET_NOTIFICATIONS_FAILURE,
    GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_REQUEST,
    GET_SINGLE_NOTIFICATION_FAILURE, GET_SINGLE_NOTIFICATION_REQUEST
} from '../actiontypes';
import { axiosWithToken } from '../../utils/axios_config';

const getSingleNotificationFailure = () => ({ type: GET_SINGLE_NOTIFICATION_FAILURE });
const getSingleNotificationRequest = () => ({ type: GET_SINGLE_NOTIFICATION_REQUEST });

const getNotificationsSuccess = notification => ({ type: GET_NOTIFICATIONS_SUCCESS, notification });
const getNotificationsFailure = () => ({ type: GET_NOTIFICATIONS_FAILURE });
const getNotificationsRequest = () => ({ type: GET_NOTIFICATIONS_REQUEST });

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
            window.location.replace(`/articles/${res.data.notifications.action_object.slug}`);

        })
        .catch((error) => {
            dispatch(getSingleNotificationFailure());
        });
};
