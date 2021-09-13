import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { BiPencil } from 'react-icons/bi';
import { AiFillCamera } from 'react-icons/ai';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(e){
        e.preventDefault();
        this.props.openModal('editBasic')
    }

    render(){
        return(
            <div className = "profile">
                <NavbarContainer/>
                <div className="left_section">
                    <div className = "basic_info">
                        <div className="banner">
                            <img className="banner_photo" src={window.banner} />
                            <div className="add_banner_photo"><AiFillCamera/></div>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <div onClick={this.handleEdit} className="edit_basic_info"><BiPencil/></div>
                        </div>
                        <div className="info_section">
                            <div className="currentUser_info">
                                <div className="name">
                                    <h2 className="username"></h2>
                                    <p className="pronouns"></p>
                                </div>
                                <div className="school">
                                    <img src="" alt="" />
                                    <h4 className="school_name"></h4>
                                </div>
                            </div>
                            <div className="headline"></div>
                            <div className="location"></div>
                            <div className="num_connections"></div>
                        </div>
                    </div>
                    <div className = "experience">
                    
                    </div>
                    <div className = "education">

                    
                    </div>     
                </div>
            </div>
        )
    }
}

export default UserProfile;