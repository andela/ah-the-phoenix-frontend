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
        const user = "{sufuduneun}"
        const expectedAction = {
            type: types.LOGIN_SUCCESS,
            user: user,
            isFetching: false
        }
        expect(actions.loginSuccess(user)).toEqual(expectedAction)
    })

    it('should return login failure', () => {
        const expectedAction = {
            type: types.LOGIN_FAILURE,
            isFetching: false
        }
        expect(actions.loginFailure()).toEqual(expectedAction)
    })
})