import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im';
import { BsPeopleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

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
    };

    handleDropdown(e) {
        const newState = !this.state.dropdown 
        this.setState({dropdown: newState})
    }

    render(){
        const menuAvatar = this.props.currentUser.avatarUrl ? <img className= "menu_avatar" src={this.props.currentUser.avatarUrl} /> : <img className="menu_avatar" src={window.avatar} />
        const dropdownAvatar = this.props.currentUser.avatarUrl ? <img className= "dropdown-avatar" src={this.props.currentUser.avatarUrl} /> : <img className="dropdown-avatar" src={window.avatar} />

        return(
            <div className="navbar"> 
                <div className="header">
                        <div className="left-nav">
                        <Link to="/feed"><img className="logo" src={window.logo} /></Link>
                        <div className="nav-search">
                            <FaSearch />
                            <input type="text" placeholder="Search" disabled></input>
                        </div>
                    </div>
                    <div className="right-nav">
                        <ul className="navbar-icons">
                            <li className="single-icon">
                                <Link id="single-icon" to='/feed'>
                                    <p className="navbar-icon"><ImHome3 /></p>
                                    <p className="title">Home</p>
                                </Link>
                            </li>
                            <li className="single-icon">
                                <Link id="network" to='/myNetwork'>
                                    <p className="navbar-icon"><BsPeopleFill /></p>
                                    <p className="title">My Network</p>
                                </Link>
                            </li>
                            <li className="dropdown_menu">
                                <div className="avatar_dropdown" onClick={this.handleDropdown} >
                                    <div>{menuAvatar}</div>
                                    <p>Me</p>
                                </div>
                                <ul onClick={e => e.stopPropagation()} className={this.state.dropdown ? "show_dropdown" : "clear"}>
                                    <li className="dropdown_pic">
                                        <p >{dropdownAvatar}</p>
                                        <p className="dropdown-name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
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