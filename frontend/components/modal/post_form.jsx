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
            body: '',
            photoUrl: null,
            photoFile: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
        this.setState({ photoUrl: reader.result, photoFile: file });

        if (file) {
        reader.readAsDataURL(file);
        } else {
        this.setState({ photoUrl: "", photoFile: null });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.createPost(formData)
            .then(() => this.props.closeModal())
        // this.setState({
        //     body: '',
        //     photoUrl: null,
        //     photoFile: null
        // });
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
        const preview = this.state.photoUrl ? <img className= "image_preview" src={this.state.photoUrl} /> : null;
        const avatarPost = this.props.currentUser.avatarUrl ? <img className= "avatar_post" src={this.props.currentUser.avatarUrl} /> : null;

        return(
            <div className="post_modal">
                    <div className="post_header">
                        <h2 className="post_message">Create a post</h2>
                        <p className="close_post" onClick={this.handleModal}><AiOutlineClose /></p>
                    </div>
                    <div className="post_user_header">
                        <div className="create_post_avatar">
                            {avatarPost}
                        </div>
                        <div className="create_post_user"r>
                            {this.props.currentUser.first_name} {this.props.currentUser.last_name}
                        </div>
                    </div>
                    <div className="post_body">
                        {preview}
                        <textarea value={this.state.body} onChange={this.handleInput('body')} placeholder="What do you want to talk about?" />
                    </div>
                    <div className="create_post_icons">
                        <ul className="attach_icons">
                            <li>
                                <label className="attach_icon"><HiOutlinePhotograph />
                                    <input id = "file_input" onChange={this.handleFile} type="file"/>
                                </label>
                            </li>
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