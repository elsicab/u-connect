import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import ExperienceIndexContainer from './experience'
import EducationIndexContainer from './education'
import { BiPencil } from 'react-icons/bi';
import { AiFillCamera } from 'react-icons/ai';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions'
import { fetchProfile, fetchProfiles } from '../../actions/profile_actions'
import { RiContactsBookLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';
import { fetchUsers } from '../../actions/user_actions';



class UserProfile extends React.Component{
    constructor(props){
        super(props)        
        this.state = {
            // currentProfile: this.props.profile
        }

        this.handleCreate = this.handleCreate.bind(this)
        // this.handleEdit = this.handleEdit.bind(this)
        this.handleEducation = this.handleEducation.bind(this)
        this.handleExperience = this.handleExperience.bind(this)
        this.handleAvatar = this.handleAvatar.bind(this)

    }

    componentDidMount(){
        this.props.fetchProfiles();
        this.props.fetchUsers();
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
        if(!this.props.currentUser){
            return null
        } 
        console.log(this.props.profile)

        let createUpdate = this.props.profile ? <div onClick={() => this.props.openModal('editBasic', this.props.profile.id)} className="edit_basic_info"><BiPencil/></div> : <div onClick={this.handleCreate} className="edit_basic_info"><BiPencil/></div>

        let profileInfo =  this.props.profile ? 
                        <div className="info_section">
                            <div className="currentUser_info">
                                <div className="name">
                                    <h2 className="username">{this.props.profileUser.first_name} {this.props.profileUser.last_name}</h2>
                                    <p className="pronoun">({this.props.profile.pronouns})</p>
                                </div>
                            </div>
                            <div className="headline_sec">{this.props.profile.headline}</div>
                            <div className="location">{this.props.profile.location}, {this.props.profile.country}</div>
                            {/* <div className="num_connections"></div> */}
                        </div> : null
        
        const avatar = this.props.profileUser.avatarUrl ? <img className= "avatar" src={this.props.profileUser.avatarUrl} /> : 
        <img className="avatar" src={window.avatar} />
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
                            {createUpdate}
                        </div>
                        <div className="info_section">
                            {profileInfo}
                        </div>
                    </div>
                    <div className="edu_exp_sec">
                        <div className = "experience">
                            <h3>Experience</h3>
                            <div onClick={this.handleExperience} className="add_exp"><AiOutlinePlus/></div>
                        </div>
                        <div className= "education_list">
                            <ExperienceIndexContainer/>
                        </div>
                        <div className = "education">
                            <h3>Education</h3>
                            <div onClick={this.handleEducation} className="add_edu"><AiOutlinePlus/></div>
                        </div>
                        <div className= "education_list">
                            <EducationIndexContainer/>
                        </div>    
                    </div> 
                </div>
                </div>
            </div>
        )
    }
}


const mSTP = (state, ownProps) => {
    // debugger
    return{
        currentUser: state.entities.users[state.session.currentUser],
        modal: state.ui.modal,
        // profile: state.entities.profiles[ownProps.match.params.userId],
        profileUser: state.entities.users[ownProps.match.params.userId],
        userId: ownProps.userId, 
        profile: Object.values(state.entities.profiles).filter(
            profile => {
                // debugger
                return profile.user_id == ownProps.match.params.userId}
        )[0],
    }
   
}

const mDTP = dispatch => ({
    openModal: (modal, id) => dispatch(openModal(modal, id)),
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchUsers: () => dispatch(fetchUsers()),

})


export default connect(mSTP, mDTP)(UserProfile);