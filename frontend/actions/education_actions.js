import * as ApiUtil from '../util/education_api_util';

export const RECEIVE_EDUCATIONS = "RECEIVE_EDUCATIONS";
export const RECEIVE_EDUCATION = "RECEIVE_EDUCATION";
export const REMOVE_EDUCATION = "REMOVE_EDUCATION";
export const RECEIVE_EDUCATION_ERRORS = "RECEIVE_EDUCATION_ERRORS";
export const CLEAR_EDUCATION_ERRORS = "CLEAR_EDUCATION_ERRORS";

export const receiveEducation = education => ({
    type: RECEIVE_EDUCATION, 
    education
})

export const receiveEducations = educations => ({
    type: RECEIVE_EDUCATIONS, 
    educations
})

export const removeEducation = educationId => ({
    type: REMOVE_EDUCATION, 
    educationId
})

export const receiveEducationErrors = errors => ({
    type: RECEIVE_EDUCATION_ERRORS, 
    errors
})

export const clearEducationErrors = () => ({
  type: CLEAR_EDUCATION_ERRORS,
});

export const fetchEducations = () => dispatch => (
    ApiUtil.fetchEducations()
        .then(educations => dispatch(receiveEducations(educations)))
)

export const createEducation = education => dispatch => (
    ApiUtil.createEducation(education)
        .then(education => dispatch(receiveEducation(education)),
        error => (dispatch(receiveEducationErrors(error.responseJSON))))
)

export const deleteEducation = educationId => dispatch => (
    ApiUtil.deleteEducation(educationId)
        .then(() => dispatch(removeEducation(educationId)))
)

export const editEducation = education => dispatch => (
    ApiUtil.editEducation(education)
        .then(education => dispatch(receiveEducation(education)),
        error => (dispatch(receiveEducationErrors(error.responseJSON))))
)