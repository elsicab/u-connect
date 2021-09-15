import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'; 
import { AiOutlineClose } from 'react-icons/ai';
import { createExperience } from '../../actions/experience_actions';
import { fetchExperiences } from '../../actions/experience_actions';



class ExpBasic extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            company: '',
            location: '',
            start: '',
            end: '',
            industry: '',
            description: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleModal = this.handleModal.bind(this);

    }

    componentDidMount(){
        this.props.fetchExperiences();
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
                    <input value={this.props.title} onChange={this.handleInput('title')} type="text" />
                </div>
                <div className="school_input">
                    <label>Company name*</label>
                    <input value={this.props.company} onChange={this.handleInput('company')} type="text" />
                </div>
                <div className="school_input">
                    <label>Location</label>
                    <input value={this.props.location} onChange={this.handleInput('location')} type="text" />
                </div>
                <div className="start">
                    <label>Start date* </label>
                    <input value={this.props.start} onChange={this.handleInput('start')} type="text" />
                </div>
                <div className="end">
                    <label>End date*</label>
                    <input value={this.props.end} onChange={this.handleInput('end')} type="text" />
                </div>
                <div className="degree">
                    <label>Industry*</label>
                    <input value={this.props.industry} onChange={this.handleInput('industry')} type="text" />
                </div>
                <div className="activities">
                    <label>Description</label>
                    <textarea value={this.props.description} onChange={this.handleInput('description')} name="" id="" cols="10" rows="3"></textarea>
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
    closeModal: () => dispatch(closeModal()), 
    fetchExperiences: () => dispatch(fetchExperiences())
})

export default connect(mSTP, mDTP)(ExpBasic);
