import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'


const mSTP = state => ({
    currentuser: state.entities.users[state.session.id],
    users: state.entities.users,
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout()),
})


export default connect(mSTP, mDTP)(UserProfile);