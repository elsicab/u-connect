import React from 'react'
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiFillPlaySquare } from 'react-icons/ai'
import { RiCalendarEventFill } from 'react-icons/ri';
import { RiArticleLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai'
// import MiddleContainer from './middle_container';

const Middle = () => {
    const postForm = () => <div className="post_modal">
                    <div className="post_header">
                        <h2 className="post_message">Create a post</h2>
                        <p className="close_post"><AiOutlineClose /></p>
                    </div>
                    <div className="post_body">
                        <textarea placeholder="What do you want to talk about?"></textarea>
                    </div>
                    <div className="create_post_icons">
                        <ul className="attach_icons">
                            <li className="attach_icon"><HiOutlinePhotograph /></li>
                            <li className="attach_icon"><AiFillPlaySquare/></li>
                            <li className="attach_icon"><RiCalendarEventFill/></li>
                            <li className="attach_icon"><RiArticleLine/></li>
                        </ul>
                        {/* <button onClick={() => closeModal()}>Post</button> */}
                    </div>
            </div>

    return(
        <div className="feed">
            <div className="post_container">
                {/* <span className="button_text" onClick={() => openModal()}>Start a post</span> */}
                <button className="post_button"></button>
                <ul className="post_icons">
                    <li className="post_icon">
                        <li className="photo_icon"><HiOutlinePhotograph /></li>
                        <li>Photo</li>
                    </li>
                    <li className="post_icon">
                        <li className="video_icon"><AiFillPlaySquare/></li>
                        <li>Video</li>
                    </li>
                    <li className="post_icon">
                        <li className="event_icon"><RiCalendarEventFill/></li>
                        <li>Event</li>
                    </li>
                    <li className="post_icon">
                        <li className="article_icon"><RiArticleLine/></li>
                        <li>Write article</li>
                    </li>
                </ul>
            </div>
            
            {/* {postForm} if this.props.modal; */}
            
            {/* {this.props.modal && <div>{postForm}</div>} */}
        </div>


        // <div>Post and Feed!</div>
    )
}

export default Middle;