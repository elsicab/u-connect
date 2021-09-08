import * as ApiUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER, 
    currentUser 
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS, 
    errors
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const login = user => dispatch => (
    ApiUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => (dispatch(receiveErrors(error.responseJSON))))
);

export const logout = () => dispatch => (
    ApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
    ApiUtil.signup(user)
    .then( currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => (dispatch(receiveErrors(error.responseJSON))))
);