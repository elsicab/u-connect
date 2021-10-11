import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import { fetchConnections } from '../../actions/connection_action';
import { RiLinkedinLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi'
import { SiAngellist } from 'react-icons/si'

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
        if(Math.floor(time / 604800000) > 0){
            return Math.floor(time / 604800000) + 'weeks'
        }else if(Math.floor(time / 86400000 ) > 0){
            return Math.floor(time / 86400000) + 'days'
        }else if(Math.floor(time / 3600000) > 0)
            return Math.floor(time / 3600000) + 'hours'
        else{
            return Math.floor(time / 60000) + 'minutes'
        }
    }

    render(){
        console.log(this.props.connections)
        const showConnections = !this.props.connections ? <div></div> : 
        this.props.connections.reverse().map((connection, i) => {
            const connectionAvatar = 
            connection.connected.avatar ? <img className= "connection-avatar" src={connection.connected.avatar} /> : 
            <img className="connection-avatar" src={window.avatar} />
            return(
            <div key={`${i}`} className="single-connection">
                <div>{connectionAvatar}</div>
                <div className="connection-info">
                    <div className="network-link">
                        <Link className="connection-link" to={`/users/${connection.connected_id}`}>
                            <div className="connection-name">
                                <p>{connection.connected.first_name} {connection.connected.last_name}</p>
                            </div>
                        </Link>
                    </div>
                    <div className="connection-created-time">
                        <p>Connected {this.timepassed(connection.created_at)} ago</p>
                    </div>
                </div>
            </div>
        )})

        return(
            <div>
                <NavbarContainer/>
                <div className="network-main">
                    <div className="network-body">
                        <div className="network-connections">
                            <div className="connection-count">
                                <p>{this.props.connections.length} Connections</p>
                            </div>
                            <div className="connection-list">
                                {showConnections}
                            </div>
                        </div>
                        <div className="right_side">
                            <div className="developer-info">
                                <p>Ad</p>
                                <div className="developer-main">
                                    <div className="developer-section">
                                        <img className="developer-img" src={window.developer} />
                                        <div className="developer-social">
                                            <a className="developer-social-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/elsa-caballero/"><RiLinkedinLine /></a>
                                            <a className="developer-social-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/elsicab"><FiGithub /></a>
                                            <a className="developer-social-icon" target="_blank" rel="noopener noreferrer" href="https://angel.co/u/elsa-caballero"><SiAngellist /></a>
                                        </div>
                                    </div>
                                    <p>Software Engineer | Java • JavaScript • React •
                                    Redux • Ruby • Ruby on Rails • SQL • jQuery •
                                        Git • Express • Node • MongoDB • HTML • CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
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