import {RECEIVE_COMMENT, RECEIVE_COMMENTS, DELETE_COMMENT} from '../actions/comment_action';

const commentReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            return Object.assign({}, state, action.comment)
        case DELETE_COMMENT:
            let newState = []
            return newState.filter(element => element !== action.commentId);
        default:
            return state;
    }
}

export default commentReducer;