import React from 'react';
import { FaSearch } from 'react-icons/fa';
import SessionContainer from '../sessions/session_container';
import LogoMain from "../../../app/assets/images/wiredIn_logo.png";
import Hero from "../../../app/assets/images/hero.jpg";




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
                <div className="navbar"> 
                    <div className="header">
                        <div className="left_nav">
                            <img className="main_logo" src={LogoMain} />
                            <div className="nav_search">
                                <FaSearch />
                                <input type="text" placeholder="Search"></input>
                            </div>
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

                    </div>
                    <div className="signup_banner">

                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;