import {RECEIVE_CONNECTION, RECEIVE_CONNECTIONS, DELETE_CONNECTION} from '../actions/connection_actions';

const connectionReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_CONNECTIONS:
            return action.connections
        case RECEIVE_CONNECTION:
            return Object.assign({}, state, action.connection)
        case DELETE_CONNECTION:
            delete newState[action.connectionId]
            return newState
        default:
            return state;
    }
}

export default connectionReducer;