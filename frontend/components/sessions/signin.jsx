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
        this.renderErrors = this.renderErrors.bind(this);
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
            this.setState({ [type]: e.currentTarget.value })
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const currentUser = Object.assign({}, this.state);
        this.props.login(currentUser)
        .then( () => this.props.history.push('/feed'));
    };

    renderErrors() {
        return(
        <ul className="errors">
            {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="error">
                {error}
            </li>
            ))}
        </ul>
        );
    }

    render() {
        return (
            <div className="signin">
                    {/*<img /> logo */}
                <img className="logo2" src={Logo2} />
        
                <form className="signin_form" onSubmit={this.handleSubmit}>
                    <h2>Sign in</h2>
                    <p>Stay updated on your professional world</p>  
                    <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')} />
                    {this.renderErrors()}
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

// export default withRouter(Signin);
export default Signin;