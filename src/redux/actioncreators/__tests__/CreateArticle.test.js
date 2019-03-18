import * as actions from '../createArticle'
import * as types from "../../actiontypes"

describe('Create Article actions', () => {
    it('should return article create request', () => {
        const expectedAction = {
            type: types.CREATE_ARTICLE_REQUEST
        }
        expect(actions.createArticleRequest()).toEqual(expectedAction)
    })

    it('should create article successfully', () => {
        const expectedAction = {
            type: types.CREATE_ARTICLE_SUCCESS
        }
        expect(actions.createArticleSuccess()).toEqual(expectedAction)
    })

    it('should return article create failure', () => {
        const expectedAction = {
            type: types.CREATE_ARTICLE_FAILURE
        }
        expect(actions.createArticleFailure()).toEqual(expectedAction)
    })
})