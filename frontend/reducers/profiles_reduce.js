import { RECEIVE_PROFILE, RECEIVE_ALL_PROFILES } from "../actions/profile_actions";

const profileReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_PROFILE:
            return Object.assign({}, state, action.profile)
        case RECEIVE_ALL_PROFILES:
            return action.profiles
        default: 
            return state;
    }
}

export default profileReducer;