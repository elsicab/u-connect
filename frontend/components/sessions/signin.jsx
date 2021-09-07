import React from 'react';
import Logo2 from "../../../app/assets/images/wiredIn_logo.png";


class Signin extends React.Component {
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

    render() {
        return (
            <div className="signin">
                    {/*<img /> logo */}
                <img className="logo2" src={Logo2} />
        
                <form className="signin_form">
                    <h2>Sign in</h2>
                    <p>Stay updated on your professional world</p>  
                    <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')} />
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')} />
                    <p className="forgot_password">Forgot Password?</p>
                    <button onClick={this.handleSubmit} className="signin_button">Sign in</button>
                    {/* <p> ---------------------------- or ----------------------------</p> */}
                    <button onClick={this.handleDemo} className="signin_button">Demo User</button>
                </form>
                <p className="join_now">New to wiredIn? Join now</p>
            </div>
        )
    };
};

export default Signin;