import * as actions from '../editProfile/'
import * as types from '../../actiontypes'


describe('Tests for edit profile actions', () => {
    it('should create an action to request profile', () => {
        const expectedAction = {
            type: types.EDIT_PROFILE_REQUEST
        }
        expect(actions.editProfileRequest()).toEqual(expectedAction)
    })


    it('should create an action to successfully request profile', () => {
        const payload = { "user": "sd" }
        const expectedAction = {
            type: types.EDIT_PROFILE_SUCCESS,
            payload
        }
        expect(actions.editProfileSuccess(payload)).toEqual(expectedAction)
    })

        it('should create an action to return to show when retrieval failed', () => {
            const expectedAction = {
                type: types.EDIT_PROFILE_FAILURE
            }
            expect(actions.editProfileFailure()).toEqual(expectedAction)
        })
    })

