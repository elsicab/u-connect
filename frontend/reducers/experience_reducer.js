import { RECEIVE_EXPERIENCES, RECEIVE_EXPERIENCE, REMOVE_EXPERIENCE  } from "../actions/experience_actions";

const experienceReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_EXPERIENCES:
            return action.experiences
        case RECEIVE_EXPERIENCE:
            return Object.assign({}, state, action.experience)
        case REMOVE_EXPERIENCE:
            delete newState[action.experienceId]
            return newState
        default: 
            return state;
    }
}

export default experienceReducer;