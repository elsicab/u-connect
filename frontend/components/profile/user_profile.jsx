import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import ExperienceIndexContainer from './experience'
import EducationIndexContainer from './education'
import { BiPencil } from 'react-icons/bi';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchProfiles } from '../../actions/profile_actions'
import { createConnection } from '../../actions/connection_action';
import { AiOutlinePlus } from 'react-icons/ai';
import { fetchUsers } from '../../actions/user_actions';
import { RiLinkedinLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi'
import { SiAngellist } from 'react-icons/si'



class UserProfile extends React.Component{
    constructor(props){
        super(props)        
        this.state = {
            // currentProfile: this.props.profile
        }

        this.handleCreate = this.handleCreate.bind(this)
        this.handleEducation = this.handleEducation.bind(this)
        this.handleExperience = this.handleExperience.bind(this)
        this.handleAvatar = this.handleAvatar.bind(this)
        this.handleConnection = this.handleConnection.bind(this)

    }

    componentDidMount(){
        this.props.fetchProfiles();
        this.props.fetchUsers();
    }

    handleConnection(e){
        console.log(this.props.connected)
        e.preventDefault();
        this.props.createConnection({connected_id: this.props.connected})
    }

    handleCreate(e){
        e.preventDefault();
        this.props.openModal('createBasic')
    }

    handleAvatar(e){
        e.preventDefault();
        this.props.openModal('addAvatar')
    }

    handleEducation(e){
        e.preventDefault();
        this.props.openModal('addEducation')
    }

    handleExperience(e){
        e.preventDefault();
        this.props.openModal('addExperience')
    }

    render(){
        if(!this.props.profileUser){
            return null
        } 


        let createUpdate = this.props.profile ? <div onClick={() => this.props.openModal('editBasic', this.props.profile.id)} className="edit_basic_info"><BiPencil/></div> : <div onClick={this.handleCreate} className="edit_basic_info"><BiPencil/></div>
        let renderCreate = this.props.profileUser.id == this.props.currentUser.id ? createUpdate : null
        let profileInfo =  this.props.profile ? 
                        <div className="info_section">
                            <div className="currentUser_info">
                                <div className="name">
                                    <h2 className="username_profile">{this.props.profileUser.first_name} {this.props.profileUser.last_name}</h2>
                                    <p className="pronoun">({this.props.profile.pronouns})</p>
                                </div>
                            </div>
                            <div className="headline_sec">{this.props.profile.headline}</div>
                            <div className="location">{this.props.profile.location}, {this.props.profile.country}</div>
                            <button onClick={this.handleConnection} className="connect-button">Connnect</button>
                        </div> : 
                        <div className="info_section">
                            <div className="currentUser_info">
                                <div className="name">
                                    <h2 className="username_profile">{this.props.profileUser.first_name} {this.props.profileUser.last_name}</h2>
                                </div>
                            </div>
                            <button onClick={this.handleConnection} className="connect-button">Connnect</button>
                        </div> 

        
        const avatar = this.props.profileUser.avatarUrl ? <img className= "avatar" src={this.props.profileUser.avatarUrl} /> : 
        <img className="avatar" src={window.avatar} />

        const addEducation = this.props.profileUser.id == this.props.currentUser.id ? <div onClick={this.handleEducation} className="add_edu"><AiOutlinePlus/></div> : null
        const addExperience = this.props.profileUser.id == this.props.currentUser.id ? <div onClick={this.handleExperience} className="add_exp"><AiOutlinePlus/></div> : null
        return(
            <div className = "profile">
                <NavbarContainer/>
                <div className="main_profile">
                    <div className="left_section">
                        <div className = "basic_info">
                            <div className="banner">
                                <img className="banner_photo" src={window.banner} />
                                <div className="avatar" onClick={this.handleAvatar}>{avatar}</div>
                                {/* <div className="add_banner_photo"><AiFillCamera/></div> */}
                            </div>
                            <div>
                                {/* <div className="avatar">{avatar}</div> */}
                                {renderCreate}
                            </div>
                            <div className="info_section">
                                {profileInfo}
                            </div>
                        </div>
                        <div className="edu_exp_sec">
                            <div className = "experience">
                                <h3 id="sec_title">Experience</h3>
                                {addExperience}
                            </div>
                            <div className= "education_list">
                                <ExperienceIndexContainer/>
                            </div>
                            <div className = "education">
                                <h3 id="sec_title">Education</h3>
                                {addEducation}
                            </div>
                            <div className= "education_list">
                                <EducationIndexContainer userId={this.props.userId}/>
                            </div>    
                        </div> 
                    </div>
                    <div className="right_side">
                        <div className="developer-info">
                            <p>Ad</p>
                            <div className="developer-main">
                                <div className="developer-section">
                                    <img className="developer-img" src={window.developer} />
                                    <div className="developer-social">
                                        <a className="developer-social-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/elsa-caballero/"><RiLinkedinLine /></a>
                                        <a className="developer-social-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/elsicab"><FiGithub /></a>
                                        <a className="developer-social-icon" target="_blank" rel="noopener noreferrer" href="https://angel.co/u/elsa-caballero"><SiAngellist /></a>
                                    </div>
                                </div>
                                <p>Software Engineer | Java • JavaScript • React •
                                Redux • Ruby • Ruby on Rails • SQL • jQuery •
                                    Git • Express • Node • MongoDB • HTML • CSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mSTP = (state, ownProps) => {
    return{
        currentUser: state.entities.users[state.session.currentUser],
        modal: state.ui.modal,
        profileUser: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.match.params.userId, 
        profile: Object.values(state.entities.profiles).filter(
            profile => {
                return profile.user_id == ownProps.match.params.userId}
        )[0],
        connected: ownProps.match.params.userId
    }   
   
}

const mDTP = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchUsers: () => dispatch(fetchUsers()),
    createConnection: connection => dispatch(createConnection(connection))

})


export default withRouter(connect(mSTP, mDTP)(UserProfile));