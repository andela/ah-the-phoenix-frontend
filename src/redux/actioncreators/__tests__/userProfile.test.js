import * as actions from '../userProfile/'
import * as types from '../../actiontypes'


describe('Tests for profile actions', () => {
    it('should create an action to request profile', () => {
        const expectedAction = {
            type: types.PROFILE_REQUEST
        }
        expect(actions.profileRequest()).toEqual(expectedAction)
    })

    it('should create an action to successfully request profile', () => {
        const payload = {"user":"sd"}
        const expectedAction = {
            type: types.PROFILE_SUCCESS,
            payload
        }
        expect(actions.profileSuccess(payload)).toEqual(expectedAction)
    })


    it('should create an action to return to show when retrieval failed', () => {
        const expectedAction = {
            type: types.PROFILE_FAILURE
        }
        expect(actions.profileFailure()).toEqual(expectedAction)
    })
})