import * as actions from "../deleteArticle";
import * as types from "../../actiontypes";

describe("Delete article actions", () => {
  it("should return article delete request", () => {
    const expectedAction = {
      type: types.DELETE_REQUEST,
      isFetching: true
    };
    expect(actions.deleteArticleRequest()).toEqual(expectedAction);
  });

  it("should delete article successfully", () => {
    const article_slug = "wfghugwihfvw";
    const expectedAction = {
      type: types.DELETE_SUCCESS,
      isFetching: false,
      article_slug
    };
    expect(actions.deleteArticleSuccess(article_slug)).toEqual(expectedAction);
  });

  it("should return article delete failure", () => {
    const expectedAction = {
      type: types.DELETE_FAILURE,
      isFetching: false
    };
    expect(actions.deleteArticleFailure()).toEqual(expectedAction);
  });
});
