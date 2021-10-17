import React from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiFillPlaySquare } from 'react-icons/ai';;
import PostIndexContainer from './post_index';
import { fetchProfiles } from '../../actions/profile_actions';
import { RiLinkedinLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi'
import { SiAngellist } from 'react-icons/si'

class Post extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    componentDidMount() {
        this.props.fetchProfiles();
        this.props.fetchConnections();
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.openModal('postForm')
    }

    render(){
        const avatar = this.props.currentUser.avatarUrl ? <img className= "avatar-profile" src={this.props.currentUser.avatarUrl} /> : <img className="avatar-profile" src={window.avatar} />
        const postingAvatar = this.props.currentUser.avatarUrl ? <img className= "posting-avatar" src={this.props.currentUser.avatarUrl} /> : <img className="posting-avatar" src={window.avatar} />
        const profile = this.props.profile ? 
                        <div className="info_section">
                            <div className="currentUser_info">
                                <div className="profile-name">
                                    <h2 className="feed-name"><strong>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</strong></h2>                                
                                </div>
                            </div>
                            <div id="headline-feed">{this.props.profile.headline}</div>
                        </div> : 
                        <div className="info_section">
                            <div className="currentUser_info">
                                <div className="profile-name">
                                    <h2 className="feed-name"><strong>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</strong></h2>
                                </div>
                            </div>
                        </div>

        return(
            <div className="feed" key={this.props.posts}>
                <div className="currentUser">
                        <div className="feed_banner">
                            <img className="profile-banner" src={window.banner} />
                            <div className="avatar-sec">{avatar}</div>
                        </div>
                        {profile}
                </div>
                  <div className="mid-section">    
                    <div className="post-container">
                        <div className="posting-header">
                            <div className="post_avatar">
                                <div className="posting-avatar">{postingAvatar}</div>
                            </div>
                            <div className="posting_sec">
                                <button className="posting-button" onClick={this.handleSubmit}>Start a post</button>
                            </div>
                        </div>
                        <ul className="post-icons">
                            <li className="post-icon" onClick={this.handleSubmit}>
                                <p className="photo-icon"><HiOutlinePhotograph /></p>
                                <p>Photo</p>
                            </li>
                            <li className="post-icon" onClick={this.handleSubmit}>
                                <p className="video-icon"><AiFillPlaySquare/></p>
                                <p>Video</p>
                            </li>
                        </ul>
                    </div>
                    <div className="posts_feed">
                        <PostIndexContainer />
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
        )
    }
}

export default Post;