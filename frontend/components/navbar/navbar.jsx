import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im';
import { BsBriefcaseFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { withRouter } from 'react-router';
import { BsPeopleFill } from 'react-icons/bs';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { BsPersonBoundingBox } from 'react-icons/bs'





class Navbar extends React.Component {
    constructor(props){
        super(props)
         this.state = {
            dropdown: false 
        }
        this.handleDropdown = this.handleDropdown.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.logout()
            // .then(() => this.props.history.push('/'));
    };

    handleDropdown(e) {
        const newState = !this.state.dropdown 
        this.setState({dropdown: newState})
    }

    render(){
        const menuAvatar = this.props.currentUser.avatarUrl ? <img className= "menu_avatar" src={this.props.currentUser.avatarUrl} /> : <img className="menu_avatar" src={window.avatar} />
        const dropdownAvatar = this.props.currentUser.avatarUrl ? <img className= "dropdown_avatar" src={this.props.currentUser.avatarUrl} /> : <img className="dropdown_avatar" src={window.avatar} />

        return(
            <div className="navbar"> 
                <div className="header">
                    <div className="left_nav">
                        <img className="logo" src={window.logo} />
                        <div className="nav_search">
                            <FaSearch />
                            <input type="text" placeholder="Search"></input>
                        </div>
                    </div>
                    <div className="right_nav">
                        <ul className="navbar_icons">
                            <li className="single_icon">
                                <Link id="single_icon"to='/feed'>
                                    <p className="navbar_icon"><ImHome3 /></p>
                                    <p className="title">Home</p>
                                </Link>
                            </li>
                            <li className="single_icon">
                                <p className="navbar_icon"><BsPeopleFill /></p>
                                <p className="title">My Network</p>
                            </li>
                            {/* <li className="single_icon">
                                <p className="navbar_icon"><BsBriefcaseFill /></p>
                                <p className="title">Jobs</p>
                            </li>
                            <li className="single_icon">
                                <p className="navbar_icon"><AiFillMessage /></p>
                                <p className="title">Messaging</p>
                            </li>
                            <li className="single_icon">
                                <p className="navbar_icon"><FaBell /></p>
                                <p className="title">Notifications</p>
                            </li> */}
                            {/* <li className="single_icon" id="logout_button" onClick={this.handleSubmit}><Link to='/'>Logout!</Link></li> */}
                            <li className="dropdown_menu">
                                <div className="avatar_dropdown" onClick={this.handleDropdown} >
                                    <div>{menuAvatar}</div>
                                    <p>Me</p>
                                </div>
                                <ul onClick={e => e.stopPropagation()} className={this.state.dropdown ? "show_dropdown" : "clear"}>
                                    <li className="dropdown_pic">
                                        <p >{dropdownAvatar}</p>
                                        <p className="dropdown_name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
                                    </li>
                                    <li className="view_profile">
                                        <Link className="view_btn" to={`/users/${this.props.currentUser.id}`}>View profile</Link></li>
                                    <li className="sign_out" onClick={this.handleSubmit}>Sign Out</li>
                                </ul>
                            </li>
                        </ul>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;