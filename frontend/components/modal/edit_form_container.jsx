import React from 'react';
import EditForm from './edit_form';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { editPost, fetchPost } from '../../actions/post_actions';

const mSTP = (state, ownProps)=> {
    return{
    posts: Object.values(state.entities.posts),
    postId: ownProps.postId,
    post: state.entities.posts[ownProps.postId]}
};

const mDTP = dispatch => ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    editPost: postId => dispatch(editPost(postId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditForm);