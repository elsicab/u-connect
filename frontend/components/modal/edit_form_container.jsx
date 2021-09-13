import React from 'react';
import EditForm from './edit_form';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { editPost, fetchPost } from '../../actions/post_actions';

const mSTP = state => ({
    posts: Object.values(state.entities.posts),

});

const mDTP = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    editPost: formData => dispatch(editPost(formData)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditForm);