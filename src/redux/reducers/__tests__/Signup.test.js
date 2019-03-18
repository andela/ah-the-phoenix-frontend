import { signupReducer, initState } from '../signupReducer'
import * as types from '../../actiontypes'


describe('Signup reducer', () => {
    it('should return the initial state', () => {
        expect(signupReducer(undefined, {})).toEqual(initState)
    })

    it('should set isFetching to true when sign up is sending a request', () => {
        expect(signupReducer(initState,
            { type: types.SIGNUP_REQUEST }).isFetching).toBe(true);
    });

    it('should set isFetching to false when sign up is successful', () => {
        expect(signupReducer(initState,
            { type: types.SIGNUP_SUCCESS }).isFetching).toBe(false);
    });
    it('should set isFetching to false when sign up is failed', () => {
        expect(signupReducer(initState,
            { type: types.SIGNUP_FAILURE }).isFetching).toBe(false);
    });
})  