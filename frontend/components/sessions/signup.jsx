import React from 'react';
import Logo3 from "../../../app/assets/images/wiredIn_2.png";


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
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
        this.props.signup(this.state)
            .then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <div className="signup">
                <img className="logo3" src={Logo3} />
                <h2 className="banner">Make the most of your professional life</h2>
                <form className="signup_form">
                    <label className="label">First Name</label>
                        <input type="text" value={this.state.first_name} onChange={this.handleInput('first_name')} />
                    
                    <label className="label">Last Name</label>
                        <input type="text" value={this.state.last_name} onChange={this.handleInput('last_name')} />
                    
                    <label className="label">Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    
                    <label className="label">Password (6 or more characters)</label>
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    
                    <p className="fine_print">By clicking Agree & Join, you agree to the wiredIn User Agreement, Privacy Policy, and Cookie Policy</p>
                    <button onClick={this.handleSubmit} className="signup_button">Agree & Join</button>
                </form>
            </div>
        )
    };
};

export default Signup;