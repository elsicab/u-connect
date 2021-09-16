import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'; 
import { AiOutlineClose } from 'react-icons/ai';
import { editExperience } from '../../actions/experience_actions';
import { fetchExperiences } from '../../actions/experience_actions';



class ExpEdit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: this.props.experience.title,
            company: this.props.experience.company,
            location: this.props.experience.location,
            start: this.props.experience.start,
            end: this.props.experience.end,
            industry: this.props.experience.industry,
            description: this.props.experience.description,
            id: this.props.experience.id
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
        this.props.editExperience(this.state)
            .then(() => this.props.closeModal())
    }

    render(){
        return (
            <div className="edu_modal">
                <div className="edu_header">
                    <h2>Edit experience</h2>
                    <p className="exit_edit" onClick={this.handleModal}><AiOutlineClose/></p>
                </div>
                <div className="school_input">
                    <label>Title*</label>
                    <input value={this.state.title} onChange={this.handleInput('title')} type="text" />
                </div>
                <div className="school_input">
                    <label>Company name*</label>
                    <input value={this.state.company} onChange={this.handleInput('company')} type="text" />
                </div>
                <div className="school_input">
                    <label>Location</label>
                    <input value={this.state.location} onChange={this.handleInput('location')} type="text" />
                </div>
                <div className="start">
                    <label>Start date* </label>
                    <input value={this.state.start} onChange={this.handleInput('start')} type="text" />
                </div>
                <div className="end">
                    <label>End date*</label>
                    <input value={this.state.end} onChange={this.handleInput('end')} type="text" />
                </div>
                <div className="degree">
                    <label>Industry*</label>
                    <input value={this.state.industry} onChange={this.handleInput('industry')} type="text" />
                </div>
                <div className="activities">
                    <label>Description</label>
                    <textarea value={this.state.description} onChange={this.handleInput('description')} name="" id="" cols="10" rows="3"></textarea>
                </div>
                <button className="save_button" onClick={this.handleSubmit}>Save</button>     
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUser],
    expId: ownProps.expId,
    experience: state.entities.experiences[ownProps.expId]
    
});

const mDTP = dispatch => ({
    editExperience: experience => dispatch(editExperience(experience)),
    closeModal: () => dispatch(closeModal()), 
    fetchExperiences: () => dispatch(fetchExperiences())
})

export default connect(mSTP, mDTP)(ExpEdit);
