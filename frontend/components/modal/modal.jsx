import React from 'react';
import PostFormContainer from './post_form_container';
import EditFormContainer from './edit_form_container';
import EditBasicContainer from './edit_basic_container';
import CreateBasicContainer from './create_basic_info';
import AddEducationContainer from './education_form';
import AddExperienceContainer from './experience_form';
import AddAvatarContainer from './add_avatar';
import EditExpContainer from './edit_experience';
import EditEduContainer from './edit_education';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

function Modal({modal, closeModal, id}){
  
    if(!modal){
        return null
    }
    let component; 
    switch(modal.modal){
        case 'postForm':
            component = <PostFormContainer />
            break;
        case 'editForm':
            component = <EditFormContainer postId={modal.id}/>
            break;
        case 'editBasic':
            component = <EditBasicContainer profileId={modal.id}/>
            break;
        case 'createBasic':
            component = <CreateBasicContainer/>
            break;
        case 'addEducation':
            component = <AddEducationContainer/>
            break;
        case 'addExperience':
            component = <AddExperienceContainer/>
            break;
        case 'addAvatar':
            component = <AddAvatarContainer/>
            break;
        case 'editExperience':
            component = <EditExpContainer expId={modal.id}/>
            break;
        case 'editEducation':
            component = <EditEduContainer eduId={modal.id}/>
            break;
        default: 
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
  };
};

export default connect(mSTP, mDTP)(Modal);

