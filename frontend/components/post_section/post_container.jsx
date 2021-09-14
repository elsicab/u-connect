import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPosts  } from '../../actions/post_actions';
import Post from './post';

const mapStateToProps = state => {
  return {
    // errors: errors.session,
    author: state.entities.posts.author,
    users: state.entities.users,
    modal: state.ui.modal, 
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.currentUser]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);