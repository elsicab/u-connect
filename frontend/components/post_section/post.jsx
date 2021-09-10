import React from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiFillPlaySquare } from 'react-icons/ai';
import { RiCalendarEventFill } from 'react-icons/ri';
import { RiArticleLine } from 'react-icons/ri';
import PostIndexContainer from './post_index_container';

class Post extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    // componentDidMount() {
    //     this.props.fetchPosts();
    // }

    handleSubmit(e){
        e.preventDefault();
        this.props.openModal('postForm')
    }

    render(){
        return(
            <div className="feed" key={this.props.posts}>
                <div className="post_container">
                    <span className="button_text" onClick={this.handleSubmit}>Start a post</span>
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
                    <PostIndexContainer />
                </div> 
            </div>
        )
    }
}

export default Post;