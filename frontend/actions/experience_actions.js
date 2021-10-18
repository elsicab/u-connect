import * as ApiUtil from '../util/experience_api_util';

export const RECEIVE_EXPERIENCES = "RECEIVE_EXPERIENCES";
export const RECEIVE_EXPERIENCE = "RECEIVE_EXPERIENCE";
export const REMOVE_EXPERIENCE = "REMOVE_EXPERIENCE";
export const RECEIVE_EXPERIENCE_ERRORS = "RECEIVE_EXPERIENCE_ERRORS";
export const CLEAR_EXPERIENCE_ERRORS = "CLEAR_EXPERIENCE_ERRORS";

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

export const receiveExperienceErrors = errors => ({
    type: RECEIVE_EXPERIENCE_ERRORS, 
    errors
})

export const clearExperienceErrors = () => ({
  type: CLEAR_EXPERIENCE_ERRORS,
});

export const fetchExperiences = () => dispatch => (
    ApiUtil.fetchExperiences()
        .then(experiences => dispatch(receiveExperiences(experiences)))
)

export const createExperience = experience => dispatch => (
    ApiUtil.createExperience(experience)
        .then(experience => dispatch(receiveExperience(experience)),
        error => (dispatch(receiveExperienceErrors(error.responseJSON))))
)

export const deleteExperience = experienceId => dispatch => (
    ApiUtil.deleteExperience(experienceId)
        .then(() => dispatch(removeExperience(experienceId)))
)

export const editExperience = experience => dispatch => (
    ApiUtil.editExperience(experience)
        .then(experience => dispatch(receiveExperience(experience)),
        error => (dispatch(receiveExperienceErrors(error.responseJSON))))
)