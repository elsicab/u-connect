import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_action';

class CommentIndex extends React.Component{
    constructor(props){
        super(props)
         this.state = {
            comments: []
        }
    }

    componentDidMount(){
        this.props.fetchComments();
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
        if(!this.props.comments) return null
        
        const showComments= this.props.comments.reverse().map((comment, i) => {
            const avatarComment = comment.user.avatar ? <img className= "avatar-index" src={comment.user.avatar} /> : 
            <img className="avatar-index" src={window.avatar} />
            return(
            <div key={`${i}`} className="single-comment">
                <div className="comment-avatar">{avatarComment}</div>                
                <div className="comment-main">
                    <div className="comment-author">
                        <div className="author_name" id="comment-author-name">
                            <p>{comment?.user?.first_name}</p>
                            <p>{comment?.user?.last_name}</p>
                        </div>
                        <div className="comment-created">
                            <p>{this.timepassed(comment.created_at)}</p>
                        </div>
                    </div>
                    <div className="comment-text">{comment.body}</div>
                </div>
            </div>
        )});
            
        
        return(
            <div>
                {!this.props.comments ?  null : showComments}
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    postId: ownProps.postId,
    comments: Object.values(state.entities.comments).filter(comment =>
        comment.post_id === ownProps.postId)
})

const mDTP = dispatch => ({
    fetchComments: () => dispatch(fetchComments())
})

export default connect(mSTP, mDTP)(CommentIndex);