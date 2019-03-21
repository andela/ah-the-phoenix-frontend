import * as types from "../../actiontypes"
import articlesReducer from "../articlesReducer"

describe("Create article reducer", () => {
    it("should return reducer initial state", () => {
        expect(articlesReducer(undefined, {})).toEqual({
            isFetching: false,
            "article": {},
            "articles": []
        })
    })
    it("should return reducer state after article create request", () => {
        expect(articlesReducer({}, {
            type: types.CREATE_ARTICLE_REQUEST,
            isFetching: true
        })).toEqual({
            isFetching: true
        })
    })
    it("should return reducer state after create article success", () => {
        expect(articlesReducer({}, {
            type: types.CREATE_ARTICLE_SUCCESS,
            isFetching: false
        })).toEqual({
            isFetching: false
        })
    })
    it("should return reducer state after create article failure", () => {
        expect(articlesReducer({}, {
            type: types.CREATE_ARTICLE_FAILURE,
            isFetching: false
        })).toEqual({
            isFetching: false
        })
    })
})