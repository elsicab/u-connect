import React from 'react';
import { connect } from 'react-redux';
import NavbarContainer from '../navbar/navbar_container';
import { fetchConnections } from '../../actions/connection_action';
import { RiLinkedinLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import { SiAngellist } from 'react-icons/si';
import SingleConnection from './network_connection';

class Network extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            connections: this.props.connections
        }
    }

    componentDidMount(){
        this.props.fetchConnections();
    }

    componentDidUpdate(prevProps){
        if (this.state.connections != prevProps.connections) {
            this.props.fetchConnections();
        }
    }

    render(){
        const showConnections = !this.props.connections ? <div></div> : 
        this.props.connections.reverse().map((connection, i) => {
            return(
            <div key={`${i}`}>
                <SingleConnection connection = {connection}/>
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
                        <div className="developer-content">
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
    fetchConnections: () => dispatch(fetchConnections()), 
});

export default connect(mSTP, mDTP)(Network);