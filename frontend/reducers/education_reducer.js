import { RECEIVE_EDUCATIONS, RECEIVE_EDUCATION, REMOVE_EDUCATION  } from "../actions/education_actions";

const educationReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_EDUCATIONS:
            return action.educations
        case RECEIVE_EDUCATION:
            newState[action.education.id] = action.education;
            return newState;
        case REMOVE_EDUCATION:
            delete newState[action.educationId]
            return newState
        default: 
            return state;
    }
}

export default educationReducer;