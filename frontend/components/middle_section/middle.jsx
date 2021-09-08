import React from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiFillPlaySquare } from 'react-icons/ai'
import { RiCalendarEventFill } from 'react-icons/ri';
import { RiArticleLine } from 'react-icons/ri';

class Middle extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.openModal('postForm')
    }

    render(){
        return(
            <div className="feed">
                <div className="post_container">
                    <span className="button_text">Start a post</span>
                    <button className="post_button" onClick={this.handleSubmit}></button>
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
            </div>
        )
    }
}

export default Middle;