import React from 'react';
import { connect } from 'react-redux';
import NavbarContainer from '../navbar/navbar_container';
import { fetchConnections } from '../../actions/connection_action';

class Network extends React.Component{
    constructor(props){
        super(props);
        this.timepassed = this.timepassed.bind(this);
    }

    componentDidMount(){
        this.props.fetchConnections();
    }

    timepassed(date){
        let time = Date.now() - Date.parse(date)
        if(Math.floor(time / 86400000 ) > 0){
            return Math.floor(time / 86400000) + 'd'
        }else if(Math.floor(time / 3600000) > 0)
            return Math.floor(time / 3600000) + 'h'
        else{
            return Math.floor(time / 60000) + 'm'
        }
    }

    render(){
        console.log(this.props.connections)
        const showConnections = !this.props.connections ? <div>Here</div> : 
        this.props.connections.reverse().map((connection, i) => {
            const connectionAvatar = 
            connection.connected.avatar ? <img className= "avatar-index" src={connection.connected.avatar} /> : 
            <img className="avatar-index" src={window.avatar} />
            return(
            <div key={`${i}`} className="single-connection">
                <div className="connection-avatar">{connectionAvatar}</div>
                <div className="connection-info">
                    <div className="connection-name">
                        <p>{connection.connected.first_name}</p>
                        <p>{connection.connected.last_name}</p>
                    </div>
                    <div className="connection-created-time">
                        <p>{this.timepassed(connection.created_at)}</p>
                    </div>
                </div>
            </div>
        )})

        return(
            <div>
                <NavbarContainer/>
                <div>
                    {showConnections}
                </div>
            </div>
        )
    }
}

const mSTP = state => ({
    currentUser: state.entities.users[state.session.currentUser],
    connections: Object.values(state.entities.connections).filter(
        connection => connection.connector_id == state.session.currentUser
    ),
});

const mDTP = dispatch => ({
    fetchConnections: () => dispatch(fetchConnections())
});

export default connect(mSTP, mDTP)(Network);