import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Signup from './signin';

const mapDispatchToProps = dispatch => ({
    loginUser: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(Signup);