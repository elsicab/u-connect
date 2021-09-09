import React from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiFillPlaySquare } from 'react-icons/ai';
import { RiCalendarEventFill } from 'react-icons/ri';
import { RiArticleLine } from 'react-icons/ri';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io'

class Post extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.renderPosts = this.renderPosts.bind(this)
    };

    componentDidMount() {
        this.props.fetchPosts();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.openModal('postForm')
    }

    // renderPosts(){
    //     console.log("In render!")
    //     return(
    //     <ul className="user_posts">
    //         {this.props.posts.map((post, i) => (
    //         <li key={`post-${i}`} className="single_post">
    //             {post.body}
    //         </li>
    //         ))}
    //     </ul>
    //     );
    // }

    render(){

        const showPosts = this.props.posts.map((post, i) => (
            <div key={`post-${i}`} className="single_post">
                <div className="post_info">
                    <p><BsPersonBoundingBox/></p>
                    {/* <p>user info</p> */}
                </div>
                <div className="post_body">{post.body}</div>
                <ul className="post_interactions">
                    <li><AiOutlineLike/>  Like</li>
                    <li><BiCommentDetail/>  Comment</li>
                    <li><RiShareForwardLine/>  Share</li>
                    <li><IoIosSend/>  Send</li>
                </ul>
            </div>
            ));

        return(
            <div className="feed">
                <div className="post_container">
                    <span className="button_text">Start a post</span>
                    <button className="post_button" onClick={this.handleSubmit}></button>
                    <ul className="post_icons">
                        <li className="post_icon">
                            <p className="photo_icon"><HiOutlinePhotograph /></p>
                            <p>Photo</p>
                        </li>
                        <li className="post_icon">
                            <p className="video_icon"><AiFillPlaySquare/></p>
                            <p>Video</p>
                        </li>
                        <li className="post_icon">
                            <p className="event_icon"><RiCalendarEventFill/></p>
                            <p>Event</p>
                        </li>
                        <li className="post_icon">
                            <p className="article_icon"><RiArticleLine/></p>
                            <p>Write article</p>
                        </li>
                    </ul>
                </div>
                <div className="posts_feed">
                    {showPosts}
                </div> 
            </div>
        )
    }
}

export default Post;