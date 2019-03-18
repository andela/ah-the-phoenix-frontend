import * as actions from '../passwordUpdateActions'
import * as types from '../../actiontypes'

describe("Tests for password update actions", () => {
    it("should create an action for update success", () => {
        const expectedAction = {
            type: types.PWD_UPDATE_SUCCESS,
            fetching: false
        }
        expect(actions.updateSuccess()).toEqual(expectedAction)
    })

    it("should create an action for update failure", () => {
        const expectedAction = {
            type: types.PWD_UPDATE_FAILURE,
            fetching: false
        }
        expect(actions.updateFailure()).toEqual(expectedAction)
    })

    it("should create an action for update request", () => {
        const expectedAction = {
            type: types.PWD_UPDATE_REQUEST,
            fetching: true
        }
        expect(actions.updateRequest()).toEqual(expectedAction)
    })
})
