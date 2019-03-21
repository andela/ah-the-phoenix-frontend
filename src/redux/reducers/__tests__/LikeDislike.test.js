import * as types from "../../actiontypes"
import likeDislikeReducer from "../LikeDislike"

describe("Like article reducer", () => {
    it("should return reducer initial state", () => {
        expect(likeDislikeReducer(undefined, {})).toEqual({
            isFetching: false,
            likeSuccess: false,
            dislikeSuccess: false,
            dislike_status: null,
            dislikes_count: null,
            likes_count: null,
            like_status: null
        })
    })
    it("should return reducer state after article like request", () => {
        expect(likeDislikeReducer({}, {
            type: types.LIKE_ARTICLE_REQUEST,
            isFetching: true
        })).toEqual({
            isFetching: true
        })
    })
    it("should return reducer state after like article success", () => {
        let payload = {
            isFetching: false,
            likes_count: 25,
            dislikes_count: 45,
            like_status: true,
            dislike_status: false,
            likeSuccess: true
        }
        expect(likeDislikeReducer({}, {
            type: types.LIKE_ARTICLE_SUCCESS,
            isFetching: false,
            payload
        })).toEqual({
            isFetching: false,
            likes_count: payload.likes_count,
            dislikes_count: payload.dislikes_count,
            like_status: payload.like_status,
            dislike_status: payload.dislike_status,
            likeSuccess: true
        })
    })
    it("should return reducer state after like article failure", () => {
        expect(likeDislikeReducer({}, {
            type: types.LIKE_ARTILE_FAILURE,
            isFetching: false
        })).toEqual({
            isFetching: false
        })
    })


    it("should return reducer state after article dislike request", () => {
        expect(likeDislikeReducer({}, {
            type: types.DISLIKE_ARTICLE_REQUEST,
            isFetching: true
        })).toEqual({
            isFetching: true
        })
    })
    it("should return reducer state after dislike article success", () => {
        let payload = {
            isFetching: false,
            likes_count: 25,
            dislikes_count: 45,
            like_status: true,
            dislike_status: false,
            dislikeSuccess: true
        }
        expect(likeDislikeReducer({}, {
            type: types.DISLIKE_ARTICLE_SUCCESS,
            isFetching: false,
            payload
        })).toEqual({
            isFetching: false,
            likes_count: payload.likes_count,
            dislikes_count: payload.dislikes_count,
            like_status: payload.like_status,
            dislike_status: payload.dislike_status,
            dislikeSuccess: true
        })
    })
    it("should return reducer state after dislike article failure", () => {
        expect(likeDislikeReducer({}, {
            type: types.DISLIKE_ARTILE_FAILURE,
            isFetching: false
        })).toEqual({
            isFetching: false
        })
    })
})