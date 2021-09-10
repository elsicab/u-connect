import {RECEIVE_POST, RECEIVE_POSTS, DELETE_POST} from '../actions/post_actions';

const postReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:
            return Object.assign({}, state, action.post)
        case DELETE_POST:
            delete newState[action.postId]
            return newState
        default:
            return state;
    }
}

export default postReducer;