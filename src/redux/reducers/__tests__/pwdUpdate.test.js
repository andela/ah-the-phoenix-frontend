import {pwdUpdateReducer, initialState} from '../pwdUpdateReducer'
import * as actions from '../../actioncreators/passwordUpdateActions'

describe('Password update reducer', () => {
    it('should return the initial state', () => {
        expect(pwdUpdateReducer(undefined, {})).toEqual(initialState)
    })
    it('should set fetching to true when password update is sending a request', () => {
        expect(pwdUpdateReducer(initialState, actions.updateRequest()).fetching).toBe(true);
    });
    it('should set fetching to false when password update is successful', () => {
        expect(pwdUpdateReducer(initialState, actions.updateSuccess()).fetching).toBe(false);
    });
    it('should set fetching to false when password update fails', () => {
        expect(pwdUpdateReducer(initialState, actions.updateFailure()).fetching).toBe(false);
    });
})