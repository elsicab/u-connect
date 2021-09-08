import { connect } from 'react-redux';
import { login, clearErrors} from '../../actions/session_actions';
import Signin from './signin';

const mSTP = state => ({
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    login: currentUser => dispatch(login(currentUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mapDispatchToProps)(Signin);