import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';
import { BiPencil } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { removePost, fetchPosts  } from '../../actions/post_actions';
import Dropdown from './post_dropdown';
import PostCommentContainer from './comment';
import SinglePost from './single_post';


class PostIndex extends React.Component{
    constructor(props){
        super(props)
         this.state = {
            posts: [],
            openMenu: true, 
        };
        this.handleFocus = this.handleFocus.bind(this); 
        this.timepassed = this.timepassed.bind(this);
    }

    handleFocus(e) {
        const newState = !this.state.openMenu 
        this.setState({openMenu: newState})
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    timepassed(date){
        let time = Date.now() - Date.parse(date)
        if(Math.floor(time / 86400000 ) > 0){
            return Math.floor(time / 86400000) + 'd'
        }else if(Math.floor(time / 3600000) > 0)
            return Math.floor(time / 3600000) + 'h'
        else{
            return Math.floor(time / 60000) + 'm'
        }
    }

    render(){
        if(!this.props.posts) return null
        const avatar = this.props.currentUser.avatarUrl ? <img className= "avatar_profile" 
            src={this.props.currentUser.avatarUrl} /> : <img className="avatar_profile" src={window.avatar} />
        
         
        const showPosts = this.props.posts.reverse().map((post, i) => {
            return(
            <div key={`${i}`} className="single_post">
                <SinglePost post={post}/>
            </div>
        )});
            
        
        return(
            <div>
                {!this.props.posts ?  null : showPosts}
             
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    // errors: errors.session,
    author: state.entities.posts.author,
    posts: Object.values(state.entities.posts),
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

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);