import React from 'react';
import EditForm from './edit_form';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { editPost } from '../../actions/post_actions';

const mSTP = state => ({
    posts: state.entities.posts
});

const mDTP = dispatch => ({
    editPost: formData => dispatch(editPost(formData)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditForm);