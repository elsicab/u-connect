import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchPosts  } from '../../actions/post_actions';
import Post from './post';
import { fetchProfiles } from '../../actions/profile_actions';
import { fetchConnections } from '../../actions/connection_action';


const mapStateToProps = state => {
  return {
    author: state.entities.posts.author,
    users: state.entities.users,
    modal: state.ui.modal, 
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.currentUser], 
    profile: Object.values(state.entities.profiles).filter(
      profile => profile.user_id == state.session.currentUser
    )[0],
    connectionCount: Object.values(state.entities.connections).filter(
      connection => connection.connector_id == state.session.currentUser 
      || connection.connected_id == state.session.currentUser
    ),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchPosts: () => dispatch(fetchPosts()), 
    fetchProfiles: () => dispatch(fetchProfiles()),
    fetchConnections: () => dispatch(fetchConnections())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);