import React from 'react';
import { RiHistoryLine } from 'react-icons/ri';
import { connect } from 'react-redux';


class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            post_id: this.props.postId, 
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    render(){
        return(
            <div className="create-comment">
                <div className="comment-body">
                    <textarea className="comment-box" placeholder="Add a comment..." />
                    <button className="comment-button">Post</button>
                </div>
            </div> 
        )
    }
}

const mSTP = (state, ownProps) => ({
    postId:  ownProps.postId
})

// const mDTP = dispatch => ({

// })

export default connect(mSTP, null)(Comments);