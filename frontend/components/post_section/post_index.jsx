import React from 'react';
import { BiCommentDetail, BiZoomIn } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { BsEyeSlashFill, BsPersonBoundingBox } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';

class PostIndex extends React.Component{
    constructor(props){
        super(props)
        this.timepassed = this.timepassed.bind(this);
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
        const showPosts = this.props.posts.reverse().map((post, i) => (
            <div key={`post-${i}`} className="single_post">
                <div className="post_info">
                    <p><BsPersonBoundingBox/></p>
                    <div className="author_info">
                        <div class="author_name">
                            <p>{post.author.first_name}</p>
                            <p>{post.author.last_name}</p>
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
            <div>{showPosts}</div>
        )

    }
}

export default PostIndex;