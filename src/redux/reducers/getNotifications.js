import {
    GET_NOTIFICATIONS_FAILURE, GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_REQUEST, GET_SINGLE_NOTIFICATION_REQUEST, GET_SINGLE_NOTIFICATION_FAILURE
} from "../actiontypes";

export const initState = {
    isFetching: false,
    count: 0
};

export const getNotificationsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_NOTIFICATIONS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case GET_NOTIFICATIONS_SUCCESS:
            let notify = action.notification.filter(u => u.unread === true)
            return {
                ...state,
                isFetching: false,
                count: notify.length,
                notifications: action.notification
            }
        case GET_NOTIFICATIONS_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        case GET_SINGLE_NOTIFICATION_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case GET_SINGLE_NOTIFICATION_FAILURE:
            return {
                ...state,
                isFetching: false
            }

        default:
            return state;
    }
};

export default getNotificationsReducer;
