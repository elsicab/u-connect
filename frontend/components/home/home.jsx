import React from 'react';
import SessionContainer from '../sessions/session_container';
import Footer from '../footer/footer';
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
        this.renderErrors = this.renderErrors.bind(this);
    };

    componentWillMount() {
        if (this.props.errors.length > 0) this.props.clearErrors()
    }
    
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

    renderErrors() {
        return(
        <ul className="errors_main">
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="error_main">
                {error}
            </li>
            ))}
        </ul>
        );
    };

    render(){
        return(
            <div className="home-page">
                <div className="navbar-home" id="home_nav"> 
                    <div className="header-home">
                        <div className="left-nav">
                            <img className="main_logo" src={window.mainlogo} />
                        </div>
                        <div className="right-nav">
                            <ul className="navbar-icons">
                                <li className="navbar-icon"><SessionContainer /></li>
                            </ul>  
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="signin_banner">
                        <div className="banner_form">
                            <h1>Welcome to your professional community</h1>
                            <form className="main_form">
                                {this.renderErrors()}
                                <input className="home_input" type="text" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')} />
                                <input className="home_input" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')}/>
                                <button onClick={this.handleSubmit} className="login_button">Sign in</button>
                                <button onClick={this.handleDemo} className="login_demo_button">Demo User</button>
                            </form>
                        </div>
                        <img className="hero_image" src={window.hero} />
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
                            <img className="banner_image" src={window.bannerimage} />
                    </div>
                    <div className="extra-space"></div>
                    <div className="signup_banner">
                            <div>
                                <p>Join your colleagues, classmates, and friends on WiredIn.</p>
                                <button className="login_button"><Link id="get_started_link" to='/signup' >Get Started</Link></button>
                            </div>
                            <img className="create_image" src={window.createimage} />
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

export default HomePage;