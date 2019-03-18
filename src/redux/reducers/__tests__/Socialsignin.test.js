import { loginReducer, initState } from '../loginReducer'
import * as types from '../../actiontypes'

describe('social signin reducer', () => {
    it('should return the initial state', () => {
        expect(loginReducer(undefined, {})).toEqual(initState)
    })

    it('should set isFetching to true when social signin is sending a request', () => {
        expect(loginReducer(initState,
            { type: types.SOCIAL_AUTH_REQUEST }).isFetching).toBe(true);
    });

    it('should set isFetching to false when social signin is successful', () => {
        expect(loginReducer(initState,
            { type: types.SOCIAL_AUTH_SUCCESS }).isFetching).toBe(false);
    });
    it('should set isFetching to false when social signin is failed', () => {
        expect(loginReducer(initState,
            { type: types.SOCIAL_AUTH_FAILURE }).isFetching).toBe(false);
    });

    it('should set loginSuccess to true when social signin is successful', () => {
        expect(loginReducer(initState,
            { type: types.SOCIAL_AUTH_SUCCESS }).loginSuccess).toBe(true);
    });
    it('should set loginSuccess to false when social signin is unsuccessful', () => {
        expect(loginReducer(initState,
            { type: types.SOCIAL_AUTH_FAILURE }).loginSuccess).toBe(false);
    });
})  