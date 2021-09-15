import * as ApiUtil from '../util/experience_api_util';

export const RECEIVE_EXPERIENCES = "RECEIVE_EXPERIENCES";
export const RECEIVE_EXPERIENCE = "RECEIVE_EXPERIENCE";
export const REMOVE_EXPERIENCE = "REMOVE_EXPERIENCE";

export const receiveExperience = experience => ({
    type: RECEIVE_EXPERIENCE, 
    experience
})

export const receiveExperiences = experiences => ({
    type: RECEIVE_EXPERIENCES, 
    experiences
})

export const removeExperience = experienceId => ({
    type: REMOVE_EXPERIENCE, 
    experienceId
})

export const fetchExperiences = () => dispatch => (
    ApiUtil.fetchExperiences()
        .then(experiences => dispatch(receiveExperiences(experiences)))
)

export const createExperience = experience => dispatch => (
    ApiUtil.createExperience(experience)
        .then(experience => dispatch(receiveExperience(experience)))
)

export const deleteExperience = experienceId => dispatch => (
    ApiUtil.deleteExperience(experienceId)
        .then(() => dispatch(removeExperience(experienceId)))
)

export const editExperience = experience => dispatch => (
    ApiUtil.editExperience(experience)
        .then(experience => dispatch(receiveExperience(experience)))
)