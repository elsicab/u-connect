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
import { withRouter } from 'react-router';



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
        const showEducations= this.props.educations.reverse().map((education, i) => {
            let editbutton = this.props.currentUser.id === education.user_id ? 
                    <div className="edit_experience" onClick={() => this.props.openModal('editEducation', education.id)}><BiPencil/></div> : null
            return (
            <div key={`${i}`} className="single_experience">
                <div className="singleExperience">
                    <div className="experience_image">
                        <img className="avatar_experience" src={window.education} />
                    </div>
                    <div className="experience_info">
                        <h2>{education.school}</h2>
                        <p>{education.degree} in {education.field}</p>
                        <p className="year_loc">{education.start} - {education.end}</p> 
                        <p>{education.activities}</p> 
                        {/* <p>{education.end}</p> */}
                    </div>
                    {editbutton}
                </div>
            </div>
            )
        });
            
        
        return(

            <div>
                {!this.props.educations ?  null : showEducations}
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // errors: errors.session,
    // educations: Object.values(state.entities.educations),
    currentUser: state.entities.users[state.session.currentUser],
    educations: Object.values(state.entities.educations).filter(
            education => {
                // debugger
                return education.user_id == ownProps.match.params.userId}
        )
  };
}; 

const mapDispatchToProps = dispatch => {
  return {
    fetchEducations: () => dispatch(fetchEducations()),
    openModal: (modal, id) => dispatch(openModal(modal, id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EducationIndex));