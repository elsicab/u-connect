import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPosts  } from '../../actions/post_actions';
import Post from './post';
import { withRouter } from 'react-router';
import { fetchProfiles } from '../../actions/profile_actions';


const mapStateToProps = state => {
  return {
    // errors: errors.session,
    author: state.entities.posts.author,
    users: state.entities.users,
    modal: state.ui.modal, 
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.currentUser], 
    profile: Object.values(state.entities.profiles).filter(
      profile => profile.user_id == state.session.currentUser
    )[0],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchPosts: () => dispatch(fetchPosts()), 
    fetchProfiles: () => dispatch(fetchProfiles())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);