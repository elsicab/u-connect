import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';
import { BiPencil } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchExperiences  } from '../../actions/experience_actions';



class ExperienceIndex extends React.Component{
    constructor(props){
        super(props)
         this.state = {
            experiences: [],
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchExperiences();
    }
    

    render(){
        if(!this.props.experiences) return null

        const showExperiences= this.props.experiences.map((experience, i) => (
            <div key={`${i}`} className="single_experience">
                <div className="singleExperience">
                    <div className="experience_image">
                        <img className="avatar_experience" src={window.experience} />
                    </div>
                    <div className="experience_info">
                        <h2>{experience.title}</h2>
                        <p>{experience.company}</p>
                        <p>{experience.start} - {experience.end}</p> 
                        <p>{experience.description}</p>
                    </div>
                    <div className="edit_experience"><BiPencil/></div>
                </div>
            </div>
            ));
            
        
        return(

            <div>
                {!this.props.experiences ?  null : showExperiences}
            </div>
        )

    }
}

const mapStateToProps = state => {
  return {
    // errors: errors.session,
    experiences: Object.values(state.entities.experiences),
    currentUser: state.entities.users[state.session.currentUser]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchExperiences: () => dispatch(fetchExperiences()),
    openModal: (modal, id) => dispatch(openModal(modal, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceIndex);