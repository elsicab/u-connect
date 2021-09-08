import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import Middle from './middle';

const mapStateToProps = state => {
  return {
    // errors: errors.session,
    modal: state.ui.modal, 
    posts: state.entities.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Middle);