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


class SinglePost extends React.Component{
    constructor(props){
        super(props)
         this.state = {
            openMenu: true, 
            showComment: false 
        };
        this.handleFocus = this.handleFocus.bind(this); 
        this.timepassed = this.timepassed.bind(this);
        this.showComment = this.showComment.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFocus(e) {
        const newState = !this.state.openMenu 
        this.setState({openMenu: newState})
    }

    showComment(e){
        this.setState({showComment: true})
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
        if(!this.props.post) return null
        const avatar = this.props.currentUser.avatarUrl ? <img className= "avatar_profile" 
            src={this.props.currentUser.avatarUrl} /> : <img className="avatar_profile" src={window.avatar} />
        
            const dropdown = this.props.currentUser.id == this.props.post.author_id ? <Dropdown post={this.props.post}/> : null
            const avatarPost = this.props.post?.author?.avatarUrl ? <img className= "avatar_index" src={this.props.post.author.avatarUrl} /> : 
            <img className="avatar_index" src={window.avatar} />
            console.log(this.state.show)
            return(
            <div>
                <div className="post_menu" >
                    {dropdown}
                </div>
                
                <div className="post_info">
                    {/* {postAvatar} */}
                    <p>{avatarPost}</p>
                    <div className="author_info">
                        <div className="author_name">
                            <p>{this.props.post?.author?.first_name}</p>
                            <p>{this.props.post?.author?.last_name}</p>
                        </div>
                        <div className="created">
                            <p>{this.timepassed(this.props.post.created_at)}</p>
                        </div>
                    </div>
                </div>
                <div><img className= "post_image" src={this.props.post.photoUrl} /></div>
                <div className="post_text">{this.props.post.body}</div>
                <ul className="post_interactions">
                    <li><AiOutlineLike/>  Like</li>
                    <li onClick={this.showComment}><BiCommentDetail/ >  Comment</li>
                </ul>
                <div className={this.state.showComment ? "show-comment" : "clear"}>
                    <PostCommentContainer postId={this.props.post.id}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    // errors: errors.session,
    author: state.entities.posts.author,
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.currentUser],
    post: ownProps.post
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    removePost: postId => dispatch(removePost(postId)),
    openModal: (modal, id) => dispatch(openModal(modal, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);