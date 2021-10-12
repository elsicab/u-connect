import {RECEIVE_LIKE, RECEIVE_LIKES, DELETE_LIKE} from '../actions/like_action';

const likeReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = [Object.assign({}, state)]
    switch(action.type){
        case RECEIVE_LIKES:
            return action.likes
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case DELETE_LIKE:
            delete newState[action.likeId]
            return newState
        default:
            return state;
    }
}

export default likeReducer;