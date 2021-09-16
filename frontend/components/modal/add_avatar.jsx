import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillCamera } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { editUser } from '../../actions/user_actions';
import { fetchUser } from '../../actions/user_actions'




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

    componentWillUnmount(){
        this.props.fetchUser(this.props.currentUser.id);
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
        formData.append('user[id]', this.props.currentUser.id)
        if (this.state.avatarFile) {
            formData.append('user[avatar]', this.state.avatarFile);
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
        const preview = this.state.avatarUrl ? <img className= "avatar_preview" src={this.state.avatarUrl} /> : null;
        return(
            <div className="avatar_modal">
                <div className="avatar_header">
                    <h2>Profile photo</h2>
                    <p className="close_avatar" onClick={this.handleModal}><AiOutlineClose /></p>
                </div>
                <div className="preview_container">{preview}</div>
                <div className="avatar_options">
                        <ul className="avatar_icons">
                            <li>
                                <label className="avatar_icon">
                                    <div className="add_avatar"><AiFillCamera /><input id = "file_input" onChange={this.handleFile} type="file"/></div>
                                    <p>Add photo</p>
                                </label>
                            </li>
                            <li className="avatar_icon">
                                <div><FaTrashAlt/></div>
                                <p>Delete</p>
                            </li>
                        </ul>
                        <button onClick={this.handleSubmit} className="avatar_button">Upload</button>
                    </div>
            </div>
            
        )
    }


}

const mSTP = state => {
    debugger
    return{
        currentUser: state.entities.users[state.session.currentUser]
    }
};

const mDTP = dispatch => ({
    editUser: userId => dispatch(editUser(userId)),
    closeModal: () => dispatch(closeModal()), 
    fetchUser: (userId) => dispatch(fetchUser(userId))
  
})

export default connect(mSTP, mDTP)(AddAvatar);