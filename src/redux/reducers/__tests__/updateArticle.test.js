import * as types from "../../actiontypes";
import articleReducer from "../articlesReducer";

describe("Update article reducer", () => {
    it("should return reducer initial state", () => {
        expect(articleReducer(undefined, {})).toEqual({
            isFetching: false,
            articles: [],
            article: {},
            liked: null,
            disliked: null
        });
    });
    it("should return reducer state after article update request", () => {
        expect(
            articleReducer(
                {},
                {
                    type: types.UPDATE_ARTICLE_REQUEST
                }
            )
        ).toEqual({
            isFetching: true
        });
    });
    it("should return reducer state after update article success", () => {
        expect(
            articleReducer({}, {
                type: types.UPDATE_ARTICLE_SUCCESS
            })
        ).toEqual({
            isFetching: false
        });
    });
    it("should return reducer state after update article failure", () => {
        expect(
            articleReducer(
                {},
                {
                    type: types.UPDATE_ARTICLE_FAILURE
                }
            )
        ).toEqual({
            isFetching: false
        });
    });
});
