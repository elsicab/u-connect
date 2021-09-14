import * as ApiUtil from '../util/profile_api_util';

export const RECEIVE_PROFILE = "RECEIVE_PROFILE";
export const RECEIVE_ALL_PROFILES = "RECEIVE_ALL_PROFILES"

export const receiveProfile = profile => ({
    type: RECEIVE_PROFILE, 
    profile
})

export const receiveAllProfiles = (profiles) => ({
    type: RECEIVE_ALL_PROFILES, 
    profiles
})

export const fetchProfile = userId => dispatch => (
    ApiUtil.fetchProfile(userId)
        .then(profile => dispatch(receiveProfile(profile)))
)

export const fetchProfiles = () => dispatch => (
    ApiUtil.fetchProfiles()
        .then(profiles => dispatch(receiveAllProfiles(profiles)))
)

export const createProfile = profile => dispatch => (
    ApiUtil.createProfile(profile)
        .then(profile => dispatch(receiveProfile(profile)))
)

export const editProfile = profile => dispatch => (
    ApiUtil.editProfile(profile)
        .then(profile => dispatch(receiveProfile(profile)))
)