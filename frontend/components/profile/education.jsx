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
import { fetchEducations  } from '../../actions/education_actions';



class EducationIndex extends React.Component{
    constructor(props){
        super(props)
         this.state = {
            educations: this.props.educations
        };
    }

    componentDidMount() {
        this.props.fetchEducations();
    }

    componentDidUpdate(prevProps){
        if(prevProps.educations.length !== this.props.educations.length){
            this.setState({
                educations: this.props.educations
            })
        }
    }
    
    render(){
        if(!this.props.educations) return null
        const showEducations= this.state.educations.map((education, i) => (
            <div key={`${i}`} className="single_experience">
                <div className="singleExperience">
                    <div className="experience_image">
                        <img className="avatar_experience" src={window.experience} />
                    </div>
                    <div className="experience_info">
                        <h2>{education.school}</h2>
                        <p>{education.degree}</p>
                        <p>{education.field} - {education.end}</p> 
                        <p>{education.end}</p>
                    </div>
                    <div className="edit_experience"><BiPencil/></div>
                </div>
            </div>
            ));
            
        
        return(

            <div>
                {!this.props.educations ?  null : showEducations}
            </div>
        )

    }
}

const mapStateToProps = state => {
  return {
    // errors: errors.session,
    educations: Object.values(state.entities.educations),
    currentUser: state.entities.users[state.session.currentUser]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEducations: () => dispatch(fetchEducations()),
    openModal: (modal, id) => dispatch(openModal(modal, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationIndex);