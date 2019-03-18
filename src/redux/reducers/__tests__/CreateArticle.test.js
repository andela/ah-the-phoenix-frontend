import * as types from "../../actiontypes"
import { createArticleReducer } from "../createArticle"

describe("Create article reducer", () => {
    it("should return reducer initial state", () => {
        expect(createArticleReducer(undefined, {})).toEqual({
            isFetching: false
        })
    })
    it("should return reducer state after article create request", () => {
        expect(createArticleReducer({}, {
            type: types.CREATE_ARTICLE_REQUEST,
            isFetching: true
        })).toEqual({
            isFetching: true
        })
    })
    it("should return reducer state after create article success", () => {
        expect(createArticleReducer({}, {
            type: types.CREATE_ARTICLE_SUCCESS,
            isFetching: false
        })).toEqual({
            isFetching: false
        })
    })
    it("should return reducer state after create article failure", () => {
        expect(createArticleReducer({}, {
            type: types.CREATE_ARTICLE_FAILURE,
            isFetching: false
        })).toEqual({
            isFetching: false
        })
    })
})