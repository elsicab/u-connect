import React from 'react';
import PostFormContainer from './post_form_container';
import EditFormContainer from './edit_form_container'
import EditBasicContainer from './edit_basic_info';
import AddEducationContainer from './education_form';
import AddExperienceContainer from './experience_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal({modal, closeModal, id}){
  
    if(!modal.modal){
        return null
    }
    let component; 
    debugger
    switch(modal.modal){
        case 'postForm':
            component = <PostFormContainer />
            break;
        case 'editForm':
            debugger
            component = <EditFormContainer postId={modal.id}/>
            break;
        case 'editBasic':
            component = <EditBasicContainer/>
            break;
        case 'addEducation':
            component = <AddEducationContainer/>
            break;
        case 'addExperience':
            component = <AddExperienceContainer/>
            break;
        default: 
            debugger
            return null;

    }

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
  );
}

const mSTP = state => {
  return {
    modal: state.ui.modal,
    posts: state.entities.posts
  };
};

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    // openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mSTP, mDTP)(Modal);

