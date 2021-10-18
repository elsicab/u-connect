import {RECEIVE_COMMENT, RECEIVE_COMMENTS, DELETE_COMMENT} from '../actions/comment_action';

const commentReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            // newState[action.comment.id] = action.comment
            // return newState
            return Object.assign({}, state, action.comment)
        case DELETE_COMMENT:
            delete newState[action.commentId]
            return newState
        default:
            return state;
    }
}

export default commentReducer;