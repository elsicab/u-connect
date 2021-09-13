import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { BiPencil } from 'react-icons/bi';
import { AiFillCamera } from 'react-icons/ai';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions'


class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(e){
        e.preventDefault();
        this.props.openModal('editBasic')
    }

    render(){
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
                    <div className = "experience">
                    
                    </div>
                    <div className = "education">

                    
                    </div>     
                </div>
                </div>
            </div>
        )
    }
}


const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUser],
    modal: state.ui.modal
})

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),

})


export default connect(mSTP, mDTP)(UserProfile);
