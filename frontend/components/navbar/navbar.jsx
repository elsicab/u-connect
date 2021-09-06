import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im';
import { BsBriefcaseFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { Route , withRouter} from 'react-router-dom';
import { BsPeopleFill } from 'react-icons/bs';
import { logout } from '../../actions/session_actions';
import Logo from "../../../app/assets/images/LI-In-Bug.png";




class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.logout()
            // .then(() => this.props.history.push('/'));
    };

    render(){
        return(
            <div className="navbar"> 
                <div className="header">
                    <div className="left_nav">
                        <img className="logo" src={Logo} />
                        <div className="nav_search">
                            <FaSearch />
                            <input type="text" placeholder="Search"></input>
                        </div>
                    </div>
                    <div className="right_nav">
                        <ul className="navbar_icons">
                            <li className="single_icon">
                                <li className="navbar_icon"><ImHome3 /></li>
                                <li className="title">Home</li>
                            </li>
                            <li className="single_icon">
                                <li className="navbar_icon"><BsPeopleFill /></li>
                                <li className="title">My Network</li>
                            </li>
                            <li className="single_icon">
                                <li className="navbar_icon"><BsBriefcaseFill /></li>
                                <li className="title">Jobs</li>
                            </li>
                            <li className="single_icon">
                                <li className="navbar_icon"><AiFillMessage /></li>
                                <li className="title">Messaging</li>
                            </li>
                            <li className="single_icon">
                                <li className="navbar_icon"><FaBell /></li>
                                <li className="title">Notifications</li>
                            </li>
                            <li className="single_icon" id="logout_button" onClick={this.handleSubmit}>Logout!</li>
                        </ul>  
                        {/* <button onClick={logout()}>Logout!</button>*/}
                    </div>
            </div>
            </div>
        )
    }
}

export default Navbar;