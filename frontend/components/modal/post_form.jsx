import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiFillPlaySquare } from 'react-icons/ai'
import { RiCalendarEventFill } from 'react-icons/ri';
import { RiArticleLine } from 'react-icons/ri';


class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createPost(this.state)
            .then(() => this.props.closeModal())
    }

    handleInput(type){
        return (e) => {
            this.setState({ [type]: e.target.value })
        };
    }

    handleModal(e){
        e.preventDefault();
        this.props.closeModal();
    }

    render(){
        return(
            <div className="post_modal">
                    <div className="post_header">
                        <h2 className="post_message">Create a post</h2>
                        <p className="close_post" onClick={this.handleModal}><AiOutlineClose /></p>
                    </div>
                    <div className="post_body">
                        <textarea value={this.state.body} onChange={this.handleInput('body')} placeholder="What do you want to talk about?" />
                    </div>
                    <div className="create_post_icons">
                        <ul className="attach_icons">
                            <li className="attach_icon"><HiOutlinePhotograph /></li>
                            <li className="attach_icon"><AiFillPlaySquare/></li>
                            <li className="attach_icon"><RiCalendarEventFill/></li>
                            <li className="attach_icon"><RiArticleLine/></li>
                        </ul>
                        <button onClick={this.handleSubmit} className="post_button">Post</button>
                    </div>
            </div>
        )
    }


}

export default PostForm;