import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'; 
import { AiOutlineClose } from 'react-icons/ai';


class EditBasic extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="edit_modal">
                <div className="edit_header">
                    <h2>Edit intro</h2>
                    <p className="exit_edit"><AiOutlineClose/></p>
                </div>
                <div className="name_input">
                    <div className="first_name_input">
                        <label>First Name *</label>
                        <input type="text" />
                    </div>
                    <div className="last_name_input">
                        <label>Last Name *</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="pronouns">
                    <label>Pronouns</label>
                    <select>
                         <option>Please Select</option>
                        <option value="she/her">She/Her</option>
                        <option value="he/him">He/Him</option>
                        <option value="they/them">They/Them</option>
                    </select>
                    <p>Let others know how to refer to you.</p>
                </div>
                <div>
                    <label>Headline
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </label>
                </div>
                <div>
                    <label>Current Position
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>Education
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>Country/Region *
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>Postal Code
                        <input type="text" />
                    </label>
                    <label>Location
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>Industry *
                        <input type="text" />
                    </label>
                </div>
                <button>Save</button>     
            </div>
        )
    }
}

export default EditBasic;