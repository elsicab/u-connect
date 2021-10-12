import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_action';
import SingleCommentContainer from './single_comment';

class CommentIndex extends React.Component{

    componentDidMount(){
        this.props.fetchComments();
    }

    componentDidUpdate(prevProps){
        if (this.props.comments.length !== prevProps.comments.length) {
            this.props.fetchComments();
        }
    }

    render(){
        if(!this.props.comments) return null
        const showComments= this.props.comments.reverse().map((comment, i) => {
            return(
            <div key={`${i}`}>
                <SingleCommentContainer comment={comment} postId={this.props.postId}/>
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