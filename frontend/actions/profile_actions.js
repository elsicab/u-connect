import * as ApiUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const receiveProfile = profile => ({
    type: RECEIVE_PROFILE, 
    profile
})

export const fetchProfile = id => dispatch => (
    ApiUtil.fetchProfile(id)
        .then(profile => dispatch(receiveProfile(profile)))
)

export const createProfile = profile => dispatch => (
    ApiUtil.createProfile(profile)
        .then(profile => dispatch(receiveProfile(profile)))
)

export const editProfile = profile => dispatch => (
    ApiUtil.editProfile(profile)
        .then(profile => dispatch(receiveProfile(profile)))
)