import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { CLOSE_MODAL } from '../actions/modal_actions'

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_SESSION_ERRORS: 
            return action.errors;
        case RECEIVE_CURRENT_USER: 
        case CLOSE_MODAL:
            return [] //sets errors array list back to empty 
        default: 
            return state;
    }
}

export default sessionErrorsReducer;