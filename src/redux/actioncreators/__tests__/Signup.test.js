import * as actions from '../signupActions'
import * as types from '../../actiontypes'


describe('Tests for signup actions', () => {
    it('should create an action to send a request to signup a user', () => {
        const expectedAction = {
            type: types.SIGNUP_REQUEST
        }
        expect(actions.signupRequest()).toEqual(expectedAction)
    })

    it('should create an action to successfully signup a user', () => {
        const expectedAction = {
            type: types.SIGNUP_SUCCESS
        }
        expect(actions.signupSuccess()).toEqual(expectedAction)
    })

    it('should give a failure action if signup fails', () => {
        const expectedAction = {
            type: types.SIGNUP_FAILURE
        }
        expect(actions.signupFailure()).toEqual(expectedAction)
    })
})