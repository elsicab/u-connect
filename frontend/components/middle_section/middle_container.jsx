import { connect } from 'react-redux';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import Middle from './middle';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    // formType: 'post',
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Middle);