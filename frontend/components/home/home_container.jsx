import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import HomePage from './home';

const mapDispatchToProps = dispatch => ({
    login: currentUser => dispatch(login(currentUser))
});

export default connect(null, mapDispatchToProps)(HomePage);