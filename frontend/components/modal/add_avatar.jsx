import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillCamera } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { editUser } from '../../actions/user_actions';



class AddAvatar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            avatarUrl: null,
            avatarFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleModal = this.handleModal.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
        this.setState({ avatarUrl: reader.result, avatarFile: file });

        if (file) {
        reader.readAsDataURL(file);
        } else {
        this.setState({ avatarUrl: "", avatarFile: null });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('currentUser[id]', this.props.currentUser.id)
        if (this.state.avatarFile) {
            formData.append('currentUser[avatar]', this.state.avatarFile);
        }
        this.props.editUser(formData)
            .then(() => this.props.closeModal())
        // this.setState({
        //     body: '',
        //     photoUrl: null,
        //     photoFile: null
        // });
    }


    handleModal(e){
        e.preventDefault();
        this.props.closeModal();
    }

    render(){   
        const preview = this.state.avatarUrl ? <img className= "image_preview" src={this.state.avatarUrl} /> : null;
        return(
            <div className="avatar_modal">
                <div className="avatar_header">
                    <h2>Profile photo</h2>
                    <p className="close_post" onClick={this.handleModal}><AiOutlineClose /></p>
                </div>
                {preview}
                <div className="create_post_icons">
                        <ul className="attach_icons">
                            <li>
                                <label className="attach_icon"><AiFillCamera />
                                    <input id = "file_input" onChange={this.handleFile} type="file"/>
                                </label>
                            </li>
                            <li className="attach_icon"><FaTrashAlt/></li>
                        </ul>
                        <button onClick={this.handleSubmit} className="post_button">Upload</button>
                    </div>
            </div>
            
        )
    }


}

const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUser]
});

const mDTP = dispatch => ({
    editUser: userId => dispatch(editUser(userId)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(AddAvatar);