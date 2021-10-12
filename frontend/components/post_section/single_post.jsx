import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
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
        
            const dropdown = this.props.currentUser.id == this.props.post.author_id ? <Dropdown post={this.props.post}/> : null
            const avatarPost = this.props.post.author.avatar ? <img className= "avatar-index" src={this.props.post.author.avatar} /> : 
            <img className="avatar-index" src={window.avatar} />
            let comments = this.props.comments.filter(comment => 
                comment.post_id === this.props.post.id)
            
            let commentCount = comments.length > 0 ? <div onClick={this.showComment} className="comment-count">{comments.length} comments</div> : null
            return(
            <div>
                <div className="post_menu" >
                    {dropdown}
                </div>
                
                <div className="post_info">
                    <p>{avatarPost}</p>
                    <div className="author-info">
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
                {commentCount}
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
    post: ownProps.post,
    comments: Object.values(state.entities.comments)
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