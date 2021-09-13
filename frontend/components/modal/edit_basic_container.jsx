import React from 'react';
import EditBasic from './edit_basic_info';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createProfile } from '../../actions/profile_actions';

const mSTP = state => ({
    profile: state.entities.profile
});

const mDTP = dispatch => ({
    createProfile: profile => dispatch(createProfile(profile)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditBasic);