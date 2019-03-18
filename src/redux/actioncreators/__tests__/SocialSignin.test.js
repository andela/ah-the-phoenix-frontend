import * as actions from '../loginActions'
import * as types from '../../actiontypes'


describe('Tests for social signup actions', () => {
    it('should create an action to send a request to signin a user with social login', () => {
        const expectedAction = {
            type: types.SOCIAL_AUTH_REQUEST
        }
        expect(actions.socialRequest()).toEqual(expectedAction)
    })

    it('should create an action to successfully signin a user with social auth', () => {
        const expectedAction = {
            type: types.SOCIAL_AUTH_SUCCESS
        }
        expect(actions.socialSuccess()).toEqual(expectedAction)
    })

    it('should give a failure action if social signin fails', () => {
        const expectedAction = {
            type: types.SOCIAL_AUTH_FAILURE
        }
        expect(actions.socialFailure()).toEqual(expectedAction)
    })
})