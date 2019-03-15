import * as types from "../../actiontypes"
import loginReducer from "../loginReducer"

describe("login reducer", () => {
    it("should return reducer initial state", () => {
        expect(loginReducer(undefined, {})).toEqual({
            isFetching: false,
            loginSuccess: false
        })
    })
    it("should return reducer state after login request", () => {
        expect(loginReducer({}, {
            type: types.LOGIN_REQUEST,
            isFetching: true
        })).toEqual({
            isFetching: true,
            loginSuccess: false
        })
    })
    it("should return reducer state after login success", () => {
        const token = "sinudsii"
        expect(loginReducer({}, {
            type: types.LOGIN_SUCCESS,
            isFetching: false,
            token: token
        })).toEqual({
            isFetching: false,
            loginSuccess: true,
            token: token
        })
    })
    it("should return reducer state after login failure", () => {
        expect(loginReducer({}, {
            type: types.LOGIN_FAILURE,
            isFetching: false
        })).toEqual({
            isFetching: false,
            loginSuccess: false
        })
    })
})