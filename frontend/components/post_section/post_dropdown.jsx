import React from 'react';
import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions';
import { BiPencil } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { removePost } from '../../actions/post_actions';


class Dropdown extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            show: false 
        }

        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(e) {
        const newState = !this.state.show 
        this.setState({show: newState})
    }

    render() {
        return (
            <div className="dropdown-post">
                <div className="dropdown-button" onClick={this.handleClick}><BiDotsHorizontalRounded/>
                </div>
                <ul onClick={e => e.stopPropagation()} id="post-dropdown" className={this.state.show ? "show-dropdown" : "clear"}>
                    <li onClick={() => this.props.openModal('editForm', this.props.post.id)}><BiPencil/>  Edit post</li>
                    <li onClick={() => this.props.removePost(this.props.post.id)}><FaTrashAlt/>  Delete post</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: ownProps.post,
    currentUser: state.entities.users[state.session.currentUser]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    removePost: postId => dispatch(removePost(postId)),
    openModal: (modal, id) => dispatch(openModal(modal, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);