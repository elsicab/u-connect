import React from 'react';


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <div className="signin">
                    {/*<img /> logo */}
        
                <form className="signin_form">
                    <h2>Sign in</h2>
                    <p>Stay updated on your professional world</p>  
                    <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')} />
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInput('password')} />
                    <p className="forgot_password">Forgot Password?</p>
                    <button onClick={this.handleSubmit} className="signin_button">Sign in</button>
                    <p> ---------------------------- or ----------------------------</p>
                    <button className="signin_button">Demo User</button>
                </form>
                <p className="join_now">New to wiredIn? Join now</p>
            </div>
        )
    };
};

export default Signin;