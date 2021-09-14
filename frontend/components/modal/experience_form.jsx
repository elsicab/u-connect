import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'; 
import { AiOutlineClose } from 'react-icons/ai';
import { createExperience } from '../../actions/experience_actions';



class ExpBasic extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
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
        this.props.createExperience(this.state)
            .then(() => this.props.closeModal())
    }

    render(){
        return (
            <div className="edu_modal">
                <div className="edu_header">
                    <h2>Add experience</h2>
                    <p className="exit_edit" onClick={this.handleModal}><AiOutlineClose/></p>
                </div>
                <div className="school_input">
                    <label>Title*</label>
                    <input type="text" />
                </div>
                <div className="school_input">
                    <label>Employment type</label>
                    <input type="text" />
                </div>
                <div className="school_input">
                    <label>Company name*</label>
                    <input type="text" />
                </div>
                <div className="school_input">
                    <label>Location</label>
                    <input type="text" />
                </div>
                <div className="start">
                    <label>Start date* </label>
                    <input type="text" />
                </div>
                <div className="end">
                    <label>End date*</label>
                    <input type="text" />
                </div>
                <div className="school_input">
                    <label>Headline</label>
                    <input type="text" />
                </div>
                <div className="degree">
                    <label>Industry*</label>
                    <input type="text" />
                </div>
                <div className="activities">
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
    createExperience: experience => dispatch(createExperience(experience)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ExpBasic);
