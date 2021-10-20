import React from 'react';
import { connect } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { BiPencil } from 'react-icons/bi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { removeComment, editComment, fetchComment } from '../../actions/comment_action';
import { Link } from 'react-router-dom';


class SingleComment extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false,
            editBody: false,
            body: this.props.comment.body,
            id: this.props.comment.id,
            post_id: this.props.postId,
        }
        this.handleShow = this.handleShow.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleComment = this.handleComment.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    componentWillReceiveProps(props) {
        this.setState({
            id: props.comment.id,
            post_id: props.postId,
            body: props.comment.body,
        })
    }

    // componentDidUpdate(prevProps, prevState){
    //     if (this.state.body != prevProps.comment.body) {
    //         this.props.fetchComment(this.props.comment.id);
    //     }
    // }

    handleCancel(e){
        e.preventDefault();
        this.setState({editBody: false})
    }

    handleShow(e){
        const newState = !this.state.show 
        this.setState({show: newState})
    }

    handleEdit(){
        this.setState({editBody: true, show: false})
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleComment(e){
        e.preventDefault();
        this.props.editComment({id: this.props.comment.id, post_id: this.state.postId, body: this.state.body})
            .then(() => this.setState({ editBody: false }))
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
        const dropdownMenu =  this.props.currentUser.id != this.props.comment.author_id ? null : 
            <div className="dropdown-post" id="comment-dropdown">
                        <div className="dropdown-comment-button" onClick={this.handleShow}><BiDotsHorizontalRounded/></div>
                            <ul onClick={e => e.stopPropagation()} id="comment-dropdown" className={this.state.show ? "show-dropdown, comment-menu" : "clear"}>
                                <li onClick={this.handleEdit}><BiPencil/>  Edit </li>
                                <li onClick={() => this.props.removeComment(this.props.comment.id)}><FaTrashAlt/>  Delete </li>
                            </ul>
                    </div>

        const commentBody = !this.state.editBody ? <div className="comment-text">{this.state.body}</div> :
           <div>
                <textarea className="comment-box-edit" onChange={this.handleInput('body')} value={this.state.body}/>
               <div className="comment-btns">
                    <div className="edit-comment-btn" onClick={this.handleComment}>Save Changes</div>
                    <div className="cancel-comment-btn" onClick={this.handleCancel}>Cancel</div>
               </div>
           </div>

        const avatarComment = this.props.comment?.user?.avatar ? <img className= "avatar-index" src={this.props.comment?.user?.avatar} /> : 
            <img className="avatar-index" src={window.avatar} />
            
        return(
            <div className="single-comment">
                <div className="comment-avatar">{avatarComment}</div>                
                <div className="comment-main">
                    {dropdownMenu}
                    <div className="comment-author">
                        <Link className="connection-link" to={`/users/${this.props.comment.author_id}`}>
                            <div className="author-name" id="comment-author-name">
                                <p>{this.props.comment?.user?.first_name} {this.props.comment?.user?.last_name}</p>
                            </div>
                        </Link>
                        <div className="comment-created">
                            <p>{this.timepassed(this.props.comment.created_at)}</p>
                        </div>
                    </div>
                    {commentBody}
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    postId: ownProps.postId,
    comment: ownProps.comment,
    currentUser: state.entities.users[state.session.currentUser]
})

const mDTP = dispatch => ({
    removeComment: commentId => dispatch(removeComment(commentId)), 
    editComment: comment => dispatch(editComment(comment)), 
    fetchComment: commentId => dispatch(fetchComment(commentId))
})

export default connect(mSTP, mDTP)(SingleComment);