import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions'

const mSTP = state => ({
    user: state.entities.users,
    session: state.session,
    currentUser: state.entities.users[state.session.currentUser]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Navbar);