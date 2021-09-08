import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Signin from './signin';

const mSTP = state => ({
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    login: currentUser => dispatch(login(currentUser))
});

export default connect(mSTP, mapDispatchToProps)(Signin);