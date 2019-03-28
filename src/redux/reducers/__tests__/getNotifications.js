import * as types from "../../actiontypes";
import getNotificationsReducer, { initState } from "../getNotifications";

describe("Get notifications reducer", () => {
    it("should return reducer initial state", () => {
        expect(getNotificationsReducer(undefined, {})).toEqual(initState);
    });

    it("should return reducer state after get notifications request", () => {
        expect(
            getNotificationsReducer(
                initState,
                {
                    type: types.GET_NOTIFICATIONS_REQUEST
                }
            ).isFetching
        ).toBe(true);
    });
    it("should return reducer state notification fetch success", () => {
        const payload = {
            isFetching: false,
            count: 2,
            notifications: []
        };
        expect(
            getNotificationsReducer(initState, {
                notifications: payload.notifications
            }).isFetching
        ).toBe(false);
    });


    it("should return reducer state after get notification failure", () => {
        expect(
            getNotificationsReducer(
                initState,
                {
                    type: types.GET_NOTIFICATIONS_FAILURE
                }
            ).isFetching
        ).toBe(false);
    });

    it("should return reducer state after get single notification request", () => {
        expect(
            getNotificationsReducer(
                initState,
                {
                    type: types.GET_SINGLE_NOTIFICATION_REQUEST
                }
            ).isFetching
        ).toBe(true);
    });

    it("should return reducer state after get single notification failure", () => {
        expect(
            getNotificationsReducer(
                initState,
                {
                    type: types.GET_SINGLE_NOTIFICATION_FAILURE
                }
            ).isFetching
        ).toBe(false);
    });
});
