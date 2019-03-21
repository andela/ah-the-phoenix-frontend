import * as types from "../../actiontypes";
import articleReducer from "../articlesReducer";

describe("Delete article reducer", () => {
  it("should return reducer initial state", () => {
    expect(articleReducer(undefined, {})).toEqual({
      isFetching: false,
      articles: [],
      article: {}
    });
  });
  it("should return reducer state after article delete request", () => {
    expect(
      articleReducer(
        {},
        {
          type: types.DELETE_REQUEST,
          isFetching: true
        }
      )
    ).toEqual({
      isFetching: true
    });
  });
  it("should return reducer state after delete article success", () => {
    const newState = {
      articles: [
        {
          article_id: "juma-1",
          body: "audu"
        }
      ]
    };
    expect(
      articleReducer(newState, {
        type: types.DELETE_SUCCESS,
        isFetching: false,
        article_id: "juma-1"
      })
    ).toEqual({
      isFetching: false,
      articles: []
    });
  });
  it("should return reducer state after delete article failure", () => {
    expect(
      articleReducer(
        {},
        {
          type: types.DELETE_FAILURE,
          isFetching: false
        }
      )
    ).toEqual({
      isFetching: false
    });
  });
});
