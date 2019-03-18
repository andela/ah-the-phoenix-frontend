import * as actions from '../passwordResetActions'
import * as types from '../../actiontypes'

describe("Tests for password reset actions", () => {
    it("should create an action for reset success", () => {
        const expectedAction = {
            type: types.RESET_SUCCESS,
            fetching: false
        }
        expect(actions.resetSuccess()).toEqual(expectedAction)
    })

    it("should create an action for reset failure", () => {
        const expectedAction = {
            type: types.RESET_FAILURE,
            fetching: false
        }
        expect(actions.resetFailure()).toEqual(expectedAction)
    })

    it("should create an action for reset request", () => {
        const expectedAction = {
            type: types.RESET_REQUEST,
            fetching: true
        }
        expect(actions.resetRequest()).toEqual(expectedAction)
    })
})
