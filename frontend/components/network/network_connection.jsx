import React from 'react';
import { connect } from 'react-redux';
import { removeConnection } from '../../actions/connection_action';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class SingleConnection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
        }
        this.timepassed = this.timepassed.bind(this);
        this.handleShow = this.handleShow.bind(this)
    }

    handleShow(e) {
        const newState = !this.state.show
        this.setState({ show: newState })
    }

    timepassed(date) {
        let time = Date.now() - Date.parse(date)
        if (Math.floor(time / 604800000) > 0) {
            return Math.floor(time / 604800000) + 'weeks'
        } else if (Math.floor(time / 86400000) > 0) {
            return Math.floor(time / 86400000) + 'days'
        } else if (Math.floor(time / 3600000) > 0)
            return Math.floor(time / 3600000) + 'hours'
        else {
            return Math.floor(time / 60000) + 'minutes'
        }
    }

    render(){
        const connectionAvatar = this.props.connection.connected.avatar ? <img className="connection-avatar" src={this.props.connection.connected.avatar} /> :
                <img className="connection-avatar" src={window.avatar} />
        return(
            <div className="single-connection">
                <div>{connectionAvatar}</div>
                <div id="connection-main">
                    <div className="connection-info">
                        <div className="network-link">
                            <Link className="connection-link" to={`/users/${this.props.connection.connected_id}`}>
                                <div className="connection-name">
                                    <p>{this.props.connection.connected.first_name} {this.props.connection.connected.last_name}</p>
                                </div>
                            </Link>
                        </div>
                        <div className="connection-created-time">
                            <p>Connected {this.timepassed(this.props.connection.created_at)} ago</p>
                        </div>
                    </div>
                    <div className="dropdown-post">
                        <div className="dropdown-button" onClick={this.handleShow}><BiDotsHorizontalRounded /></div>
                        <ul onClick={e => e.stopPropagation()} className={this.state.show ? "show-dropdown" : "clear"}>
                            <li onClick={() => this.props.removeConnection(this.props.connection.id)}><FaTrashAlt />  Remove connection </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => ({
    connection: ownProps.connection
});

const mDTP = dispatch => ({
    removeConnection: connectionId => dispatch(removeConnection(connectionId))
});

export default connect(mSTP, mDTP)(SingleConnection);