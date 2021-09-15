import React from 'react';
import PostForm from './post_form';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';

const mSTP = state => ({
    posts: state.entities.posts,
    currentUser: state.entities.users[state.session.currentUser]
    
});

const mDTP = dispatch => ({
    createPost: formData => dispatch(createPost(formData)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PostForm);