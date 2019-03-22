import * as actions from '../updateArticle'
import * as types from "../../actiontypes"

describe('Create Article actions', () => {
    it('should return article update request', () => {
        const expectedAction = {
            type: types.UPDATE_ARTICLE_REQUEST
        }
        expect(actions.updateArticleRequest()).toEqual(expectedAction)
    })

    it('should update article successfully', () => {
        const expectedAction = {
            type: types.UPDATE_ARTICLE_SUCCESS
        }
        expect(actions.updateArticleSuccess()).toEqual(expectedAction)
    })

    it('should return article update failure', () => {
        const expectedAction = {
            type: types.UPDATE_ARTICLE_FAILURE
        }
        expect(actions.updateArticleFailure()).toEqual(expectedAction)
    })
})