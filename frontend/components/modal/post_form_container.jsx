import React from 'react';
import Post from './post';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
    posts: state.entities.posts
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Post);