import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'; 
import { AiOutlineClose } from 'react-icons/ai';


class EditBasicInfo extends React.Component{
    constructor(props){
        this.state = {

        }
    }

    render(){
        return (
            <div className="edit_modal">
                <div className="edit_header">
                    <h2>Edit Intro</h2>
                    <AiOutlineClose/>
                </div>
                <div>
                    <label>First Name *
                        <input type="text" />
                    </label>
                    <label>Last Name *
                        <input type="text" />
                    </label>
                </div>
                <div>
                    <label>Pronouns</label>
                    <select name="cars" id="cars">
                         <option value="she/her">Please Select</option>
                        <option value="she/her">She/Her</option>
                        <option value="he/him">He/Him</option>
                        <option value="they/them">They/Them</option>
                    </select>
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