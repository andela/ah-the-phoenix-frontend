import {resetReducer, initialState} from '../resetReducer'
import * as actions from '../../actioncreators/passwordResetActions'

describe('Password reset reducer', () => {
    it('should return the initial state', () => {
        expect(resetReducer(undefined, {})).toEqual(initialState)
    })
    it('should set fetching to true when password reset is sending a request', () => {
        expect(resetReducer(initialState, actions.resetRequest()).fetching).toBe(true);
    });
    it('should set fetching to false when password reset is successful', () => {
        expect(resetReducer(initialState, actions.resetSuccess()).fetching).toBe(false);
    });
    it('should set fetching to false when password reset fails', () => {
        expect(resetReducer(initialState, actions.resetFailure()).fetching).toBe(false);
    });
})