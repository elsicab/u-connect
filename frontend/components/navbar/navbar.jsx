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





class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.logout()
            // .then(() => this.props.history.push('/'));
    };

    render(){
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
                                <p className="navbar_icon"><ImHome3 /></p>
                                <p className="title">Home</p>
                            </li>
                            <li className="single_icon">
                                <p className="navbar_icon"><BsPeopleFill /></p>
                                <p className="title">My Network</p>
                            </li>
                            <li className="single_icon">
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
                            </li>
                            <li className="single_icon" id="logout_button" onClick={this.handleSubmit}><Link to='/'>Logout!</Link></li>
                        </ul>  
                        {/* <button onClick={logout()}>Logout!</button>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;