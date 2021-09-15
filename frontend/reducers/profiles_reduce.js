import { RECEIVE_PROFILE, RECEIVE_ALL_PROFILES } from "../actions/profile_actions";

const profileReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_PROFILE:
            newState[action.profile.id] = action.profile;
            return newState;
        case RECEIVE_ALL_PROFILES:
            return action.profiles
        default: 
            return state;
    }
}

export default profileReducer;