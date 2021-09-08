import React from 'react';
import { FaSearch } from 'react-icons/fa';
import SessionContainer from '../sessions/session_container';
import LogoMain from "../../../app/assets/images/wiredIn_logo.png";
import Hero from "../../../app/assets/images/hero.jpg";
import BannerImage from "../../../app/assets/images/banner_image.png";
import CreateImage from "../../../app/assets/images/createuser2.jpg";
import { Link } from 'react-router-dom';





class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    };

    handleDemo(e) {
        e.preventDefault();
        this.props.login({
            email: 'ecaballero3@live.com',
            password: 'password'
        })
            .then(() => this.props.history.push('/feed'));
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/feed'));
    };

    render(){
        return(
            <div className="homePage">
                <div className="navbar" id="home_nav"> 
                    <div className="header">
                        <div className="left_nav">
                            <img className="main_logo" src={LogoMain} />
                            {/* <div className="nav_search">
                                <FaSearch />
                                <input type="text" placeholder="Search"></input>
                            </div> */}
                        </div>
                        <div className="right_nav">
                            <ul className="navbar_icons">
                                <li className="navbar_icon"><SessionContainer /></li>
                            </ul>  
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="signin_banner">
                        <div className="banner_form">
                            <h1>Welcome to your professional community</h1>
                            <form className="main_form">
                                <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')} />
                                <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')}/>
                                <p>Forgot Password?</p>
                                <button onClick={this.handleSubmit} className="login_button">Sign in</button>
                                <button onClick={this.handleDemo} className="login_button">Demo User</button>
                            </form>
                        </div>
                        <img className="hero_image" src={Hero} />
                    </div>
                    <div className="info_banner">
                            <div className="banner_text">
                                <div className="banner_title">
                                    <p>Conversations today could lead to opportunity tomorrow</p>
                                </div>
                                <div className="banner_body">
                                    <p>Sending messages to people you know is a great way to strengthen relationships 
                                        as you take the next step in your career</p>
                                </div>
                            </div>
                            <img className="banner_image" src={BannerImage} />
                    </div>
                    <div className="signup_banner">
                            <div>
                                <p>Join your colleagues, classmates, and friends on WiredIn.</p>
                                <button className="login_button"><Link to='/signup' >Get Started</Link></button>
                            </div>
                            <img className="create_image" src={CreateImage} />
                    </div>
                </div>
            </div>

        )
    }
}

export default HomePage;