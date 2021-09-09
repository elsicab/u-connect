import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';

class PostIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render(){
        const showPosts = this.props.posts.reverse().map((post, i) => (
            <div key={`post-${i}`} className="single_post">
                <div className="post_info">
                    <p><BsPersonBoundingBox/></p>
                </div>
                <div className="post_text">{post.body}</div>
                <img className= "post_image" src={post.photoUrl} />
                <ul className="post_interactions">
                    <li><AiOutlineLike/>  Like</li>
                    <li><BiCommentDetail/>  Comment</li>
                    <li><RiShareForwardLine/>  Share</li>
                    <li><IoIosSend/>  Send</li>
                </ul>
            </div>
            ));

        return(
            <div>{showPosts}</div>
        )

    }
}

export default PostIndex;