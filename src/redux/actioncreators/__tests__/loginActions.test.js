import * as actions from '../loginActions'
import * as types from "../../actiontypes"

describe('login actions', () => {
    it('should return login request', () => {
        const expectedAction = {
            type: types.LOGIN_REQUEST,
            isFetching: true
        }
        expect(actions.loginRequest()).toEqual(expectedAction)
    })

    it('should login successfully', () => {
        const token = "sufuduneun"
        const expectedAction = {
            type: types.LOGIN_SUCCESS,
            token: token,
            isFetching: false
        }
        expect(actions.loginSuccess(token)).toEqual(expectedAction)
    })

    it('should return login failure', () => {
        const expectedAction = {
            type: types.LOGIN_FAILURE,
            isFetching: false
        }
        expect(actions.loginFailure()).toEqual(expectedAction)
    })
})