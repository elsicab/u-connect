import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'; 
import { AiOutlineClose } from 'react-icons/ai';
import { createEducation } from '../../actions/education_actions';



class EditBasic extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pronouns: '',
            headline: '',
            country: '',
            industry: '',
            location: '',
            postal_code: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this);

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
        this.props.createEducation(this.state)
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
                    <input type="text" />
                </div>
                <div className="degree">
                    <label>Degree </label>
                    <input type="text" />
                </div>
                <div className="field_study">
                    <label>Field of study</label>
                    <input type="text" />
                </div>
                <div className="start">
                    <label>Start date </label>
                    <input type="text" />
                </div>
                <div className="end">
                    <label>End date (or expected)</label>
                    <input type="text" />
                </div>
                <div className="gpa">
                    <label>Grade </label>
                    <input type="text" />
                </div>
                <div className="activities">
                    <label>Activities and societies</label>
                    <textarea name="" id="" cols="10" rows="3"></textarea>
                </div>
                <div className="description">
                    <label>Description</label>
                    <textarea name="" id="" cols="10" rows="3"></textarea>
                </div>
                
                <button className="save_button" onClick={this.handleSubmit}>Save</button>     
            </div>
        )
    }
}

const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUser]
});

const mDTP = dispatch => ({
    createEducation: education => dispatch(createEducation(education)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditBasic);