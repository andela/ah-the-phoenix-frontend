import * as actions from '../getNotifications'
import * as types from "../../actiontypes"

describe('Get Notifications actions', () => {
    it('should return notifications request', () => {
        const expectedAction = {
            type: types.GET_NOTIFICATIONS_REQUEST
        }
        expect(actions.getNotificationsRequest()).toEqual(expectedAction)
    })

    it('should get notifications successfully', () => {
        const expectedAction = {
            type: types.GET_NOTIFICATIONS_SUCCESS
        }
        expect(actions.getNotificationsSuccess()).toEqual(expectedAction)
    })

    it('should return get notifications failure', () => {
        const expectedAction = {
            type: types.GET_NOTIFICATIONS_FAILURE
        }
        expect(actions.getNotificationsFailure()).toEqual(expectedAction)
    })

    it('should return get a single notifications request', () => {
        const expectedAction = {
            type: types.GET_SINGLE_NOTIFICATION_REQUEST
        }
        expect(actions.getSingleNotificationRequest()).toEqual(expectedAction)
    })

    it('should get return failure if not getting a single notificaiton', () => {
        const expectedAction = {
            type: types.GET_SINGLE_NOTIFICATION_FAILURE
        }
        expect(actions.getSingleNotificationFailure()).toEqual(expectedAction)
    })

})