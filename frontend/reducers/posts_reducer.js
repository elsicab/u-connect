import {RECEIVE_POST, RECEIVE_POSTS} from '../actions/post_actions';

const postReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_POSTS:
            return action.posts
        case RECEIVE_POST:
            return Object.assign({}, state, action.post)
        default:
            return state;
    }
}

export default postReducer;