import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { BiPencil } from 'react-icons/bi';
import { AiFillCamera } from 'react-icons/ai';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions'
import { fetchProfile, fetchProfiles } from '../../actions/profile_actions'
import { RiContactsBookLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai'



class UserProfile extends React.Component{
    constructor(props){
        super(props)        
        this.state = {
            // profile: this.props.profiles.filter(profile => profile.user_id === this.props.currentUser.id)
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleEducation = this.handleEducation.bind(this)

    }

    componentDidMount(){
        this.props.fetchProfiles()
    }


    handleEdit(e){
        e.preventDefault();
        this.props.openModal('editBasic')
    }

     handleEducation(e){
        e.preventDefault();
        this.props.openModal('addEducation')
    }

    //  handleExperience(e){
    //     e.preventDefault();
    //     this.props.openModal('editBasic')
    // }

   

    render(){
        console.log(this.props.profiles)
        const avatar = this.props.currentUser.avatarUrl ? <img className= "avatar_photo" src={this.state.currentUser.avatarUrl} /> : <img className="avatar" src={window.avatar} />
        return(
            <div className = "profile">
                <NavbarContainer/>
                <div className="main_profile">
                    <div className="left_section">
                    <div className = "basic_info">
                        <div className="banner">
                            <img className="banner_photo" src={window.banner} />
                            <div className="avatar">{avatar}</div>
                            {/* <div className="add_banner_photo"><AiFillCamera/></div> */}
                        </div>
                        <div>
                            {/* <div className="avatar">{avatar}</div> */}
                            <div onClick={this.handleEdit} className="edit_basic_info"><BiPencil/></div>
                        </div>
                        <div className="info_section">
                            <div className="currentUser_info">
                                <div className="name">
                                    <h2 className="username"><strong>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</strong></h2>
                                    <p className="pronouns"></p>
                                </div>
                                <div className="school">
                                    <img src="" alt="" />
                                    <h4 className="school_name"></h4>
                                </div>
                            </div>
                            <div className="headline"></div>
                            <div className="location"></div>
                            <div className="num_connections"></div>
                        </div>
                    </div>
                    <div className="edu_exp_sec">
                        <div className = "experience">
                            <h3>Experience</h3>
                            <div className="add_exp"><AiOutlinePlus/></div>
                        
                        </div>
                        <div className = "education">
                            <h3>Education</h3>
                            <div onClick={this.handleEducation} className="add_edu"><AiOutlinePlus/></div>
                        
                        </div>    
                    </div> 
                </div>
                </div>
            </div>
        )
    }
}


const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.currentUser],
    modal: state.ui.modal,
    profiles: Object.values(state.entities.profile)
})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchProfile: userId => dispatch(fetchProfile(userId)), 
    fetchProfiles: () => dispatch(fetchProfiles())

})


export default connect(mSTP, mDTP)(UserProfile);
