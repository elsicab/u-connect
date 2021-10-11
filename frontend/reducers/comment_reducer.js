import {RECEIVE_COMMENT, RECEIVE_COMMENTS, DELETE_COMMENT} from '../actions/comment_action';

const commentReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            // return Object.assign({}, state, action.comment)
            newState[action.comment.id] = action.comment
            return newState
        case DELETE_COMMENT:
            // let newState = []
            // return newState.filter(element => element !== action.commentId);
            delete newState[action.commentId]
            return newState
        default:
            return state;
    }
}

export default commentReducer;