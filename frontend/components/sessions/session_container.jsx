import { connect } from 'react-redux';
import Session from './session';
import { logout } from '../../actions/session_actions';

const mSTP = state => ({
    users: state.entities.users,
    id: state.session.id
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Session);