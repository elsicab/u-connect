import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'; 
import { AiOutlineClose } from 'react-icons/ai';
import { editEducation, deleteEducation } from '../../actions/education_actions';



class EduEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            school: this.props.education.school,
            degree: this.props.education.degree,
            field: this.props.education.field,
            start: this.props.education.start,
            end: this.props.education.end,
            activities: this.props.education.activities, 
            gpa: this.props.education.gpa, 
            id: this.props.education.id 
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this);
        this.handleDelete = this.handleDelete.bind(this)

    }

    handleDelete(e){
        e.preventDefault
        this.props.deleteEducation(this.props.education.id)
            .then(this.props.closeModal())
    }

    handleModal(e){
        e.preventDefault();
        this.props.closeModal();
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.editEducation(this.state)
            .then(() => this.props.closeModal())
    }

    render(){
        return (
            <div className="edu_modal">
                <div className="edu_header">
                    <h2>Add education</h2>
                    <p className="exit_edit" onClick={this.handleModal}><AiOutlineClose/></p>
                </div>
                <div className="school_input">
                    <label>School*</label>
                    <input value={this.state.school} onChange={this.handleInput('school')} type="text" />
                </div>
                <div className="degree">
                    <label>Degree </label>
                    <input  value={this.state.degree} onChange={this.handleInput('degree')} type="text" />
                </div>
                <div className="field_study">
                    <label>Field of study</label>
                    <input  value={this.state.field} onChange={this.handleInput('field')} type="text" />
                </div>
                <div className="start">
                    <label>Start date </label>
                    <input  value={this.state.start} onChange={this.handleInput('start')} type="text" />
                </div>
                <div className="end">
                    <label>End date (or expected)</label>
                    <input value={this.state.end} onChange={this.handleInput('end')} type="text" />
                </div>
                <div className="gpa">
                    <label>Grade </label>
                    <input value={this.state.gpa} onChange={this.handleInput('gpa')} type="text" />
                </div>
                <div className="activities">
                    <label>Activities and societies</label>
                    <textarea value={this.state.activities} onChange={this.handleInput('activities')} name="" id="" cols="10" rows="3"></textarea>
                </div>                
                <div className="profile_buttons">
                     <button className="delete_btn" onClick={this.handleDelete}>Delete</button>
                    <button className="save_button" onClick={this.handleSubmit}>Save</button>  
                </div>   
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUser], 
    eduId: ownProps.eduId,
    education: state.entities.educations[ownProps.eduId]
});

const mDTP = dispatch => ({
    editEducation: education => dispatch(editEducation(education)),
    closeModal: () => dispatch(closeModal()),
    deleteEducation: eduId => dispatch(deleteEducation(eduId))
})

export default connect(mSTP, mDTP)(EduEdit);