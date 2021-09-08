import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiFillPlaySquare } from 'react-icons/ai'
import { RiCalendarEventFill } from 'react-icons/ri';
import { RiArticleLine } from 'react-icons/ri';


class Post extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.closeModal();
    }

    render(){
        console.log("IN MODAL");
        return(
            <div className="post_modal">
                    <div className="post_header">
                        <h2 className="post_message">Create a post</h2>
                        <p className="close_post" onClick={this.handleSubmit}><AiOutlineClose /></p>
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
                        <button onClick={this.handleSubmit}>Post</button>
                    </div>
            </div>
        )
    }


}

export default Post;