import * as actions from '../likeDislikeArticle'
import * as types from "../../actiontypes"

describe('Like and dislike Article actions', () => {
    it('should return article like request', () => {
        const expectedAction = {
            type: types.LIKE_ARTICLE_REQUEST
        }
        expect(actions.likeRequest()).toEqual(expectedAction)
    })

    it('should like article successfully', () => {
        let payload = {}
        const expectedAction = {
            type: types.LIKE_ARTICLE_SUCCESS,
            payload
        }
        expect(actions.likeSuccess(payload)).toEqual(expectedAction)
    })

    it('should return article like failure', () => {
        const expectedAction = {
            type: types.LIKE_ARTILE_FAILURE
        }
        expect(actions.likeFailure()).toEqual(expectedAction)
    })

    it('should return article dislike request', () => {
        const expectedAction = {
            type: types.DISLIKE_ARTICLE_REQUEST
        }
        expect(actions.dislikeRequest()).toEqual(expectedAction)
    })

    it('should dislike article successfully', () => {
        let payload;
        const expectedAction = {
            type: types.DISLIKE_ARTICLE_SUCCESS,
            payload
        }
        expect(actions.dislikeSuccess(payload)).toEqual(expectedAction)
    })

    it('should return article dislike failure', () => {
        const expectedAction = {
            type: types.DISLIKE_ARTILE_FAILURE
        }
        expect(actions.dislikeFailure()).toEqual(expectedAction)
    })
})