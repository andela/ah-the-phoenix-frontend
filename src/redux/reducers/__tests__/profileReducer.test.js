import { profileReducer, initState } from '../profileReducer'
import * as types from '../../actiontypes'


describe('Get Profile reducer', () => {
    it('should set isFetching to true when profile is sending a request', () => {
        expect(profileReducer(initState,
            { type: types.PROFILE_REQUEST }).isFetching).toBe(true);
    });

    it('should set isFetching to false when profile request is successful', () => {
        expect(profileReducer(initState,
            { type: types.PROFILE_SUCCESS }).isFetching).toBe(false);
    });
    it('should set isFetching to false when profile success is failed', () => {
        expect(profileReducer(initState,
            { type: types.PROFILE_FAILURE }).isFetching).toBe(false);
    });
})

describe('Edit Profile Reducer', () => {
    it('should set isFetching to true when edit profile is sending a request', () => {
        expect(profileReducer(initState,
            { type: types.EDIT_PROFILE_REQUEST }).isFetching).toBe(true);
    });

    it('should set isFetching to false when edit profile request is successful', () => {
        expect(profileReducer(initState,
            { type: types.EDIT_PROFILE_SUCCESS }).isFetching).toBe(false);
    });
    it('should set isFetching to false when edit profile success is failed', () => {
        expect(profileReducer(initState,
            { type: types.EDIT_PROFILE_FAILURE }).isFetching).toBe(false);
    });
})