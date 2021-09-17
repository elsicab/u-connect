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
import { withRouter } from 'react-router';


class ExperienceIndex extends React.Component{
    constructor(props){
        super(props)
         this.state = {
            experiences: this.props.experiences
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchExperiences();
    }

    componentDidUpdate(prevProps){
        if(prevProps.experiences.length !== this.props.experiences.length){
            this.setState({
                experiences: this.props.experiences
            })
        }
    }
    
    render(){
        if(!this.props.experiences) return null

        const showExperiences= this.props.experiences.reverse().map((experience, i) => {
            let editbutton = this.props.currentUser.id === experience.user_id ? 
                    <div className="edit_experience" onClick={() => this.props.openModal('editExperience', experience.id)}><BiPencil/></div> : null
            return(
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
                    {editbutton}
                </div>
            </div>
            )
        });
            
        
        return(

            <div>
                {!this.props.experiences ?  null : showExperiences}
            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // errors: errors.session,
    
    currentUser: state.entities.users[state.session.currentUser],
    experiences: Object.values(state.entities.experiences).filter(
            experience => {
                // debugger
                return experience.user_id == ownProps.match.params.userId}
        )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchExperiences: () => dispatch(fetchExperiences()),
    openModal: (modal, id) => dispatch(openModal(modal, id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExperienceIndex));