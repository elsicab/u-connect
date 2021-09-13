import * as ApiUtil from '../util/user_api_util';


export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => ({
    type: RECEIVE_USER, 
    user
})

export const fetchUser = (id) => dispatch => (
    ApiUtil.fetchUser(id)
        .then( user => dispatch(receiveUser(user)))
)