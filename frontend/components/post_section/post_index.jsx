import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

class PostIndex extends React.Component{
    constructor(props){
        super(props)
        this.timepassed = this.timepassed.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    // componentDidUpdate(){
    //     this.props.fetchPosts();
    // }

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
        const showPosts = this.props.posts.reverse().map((post, i) => (
            <div key={`post-${i}`} className="single_post">
                <div className="post_menu"><BiDotsHorizontalRounded/></div>
                <div className="post_info">
                    <p><BsPersonBoundingBox/></p>
                    <div className="author_info">
                        <div className="author_name">
                            <p>{post?.author?.first_name}</p>
                            <p>{post?.author?.last_name}</p>
                        </div>
                        <div className="created">
                            <p>{this.timepassed(post.created_at)}</p>
                        </div>
                    </div>
                </div>
                <img className= "post_image" src={post.photoUrl} />
                <div className="post_text">{post.body}</div>
                <ul className="post_interactions">
                    <li><AiOutlineLike/>  Like</li>
                    <li><BiCommentDetail/>  Comment</li>
                    <li><RiShareForwardLine/>  Share</li>
                    <li><IoIosSend/>  Send</li>
                </ul>
            </div>
            ));
            
        
        return(

            <div>
                {!this.props.posts ?  null : showPosts}
             
            </div>
        )

    }
}

export default PostIndex;