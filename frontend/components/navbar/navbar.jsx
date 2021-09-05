import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im';
import { BsBriefcaseFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import SessionContainer from '../sessions/session_container';
import { logout } from '../../actions/session_actions';



const Navbar = () => {
    return(
        <div className="navbar"> 
            <div className="header">
                <div className="left_nav">
                    <img className="logo" />
                    <div className="nav_search">
                        <FaSearch />
                        <input type="text" placeholder="Search"></input>
                    </div>
                </div>
                <div className="right_nav">
                    <ul className="navbar_icons">
                        <li className="navbar_icon"><ImHome3 /></li>
                        <li className="navbar_icon"><BsPeopleFill /></li>
                        <li className="navbar_icon"><BsBriefcaseFill /></li>
                        <li className="navbar_icon"><AiFillMessage /></li>
                        <li className="navbar_icon"><FaBell /></li>
                        <li className="navbar_icon"><SessionContainer /></li>
                    </ul>
                     <button onClick={logout()}>Logout!</button>
                    
                </div>
           </div>
        </div>
    )
}

export default Navbar;