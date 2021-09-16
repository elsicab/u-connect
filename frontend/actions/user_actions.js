import * as ApiUtil from '../util/user_api_util';


export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

const receiveUser = (user) => ({
    type: RECEIVE_USER, 
    user
})

const receiveAllUsers = () => ({
    type: RECEIVE_ALL_USERS, 
    users
})

export const fetchUser = (id) => dispatch => (
    ApiUtil.fetchUser(id)
        .then( user => dispatch(receiveUser(user)))
)

export const fetchUsers = () => dispatch => (
    ApiUtil.fetchUser()
        .then( users => dispatch(receiveAllUsers(users)))
)

export const editUser = user => dispatch => (
    ApiUtil.editUser(user)
        .then(user => dispatch(receiveUser(user)))
)