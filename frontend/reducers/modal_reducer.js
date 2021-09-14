import { OPEN_MODAL, CLOSE_MODAL} from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
    Object.freeze(state)
    switch(action.type){
        case OPEN_MODAL:
            debugger
            return { ...state,  modal:action.modal, id:action.id };
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}

export default modalReducer;