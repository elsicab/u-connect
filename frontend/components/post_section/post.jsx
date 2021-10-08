import React from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiFillPlaySquare } from 'react-icons/ai';
import { RiCalendarEventFill } from 'react-icons/ri';
import { RiArticleLine } from 'react-icons/ri';
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
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.openModal('postForm')
    }

    render(){
        const avatar = this.props.currentUser.avatarUrl ? <img className= "avatar_profile" src={this.props.currentUser.avatarUrl} /> : <img className="avatar_profile" src={window.avatar} />
        const postingAvatar = this.props.currentUser.avatarUrl ? <img className= "posting_avatar" src={this.props.currentUser.avatarUrl} /> : <img className="posting_avatar" src={window.avatar} />
        const profile = this.props.profile ? 
                        <div className="info_section">
                            <div className="currentUser_info">
                                <div className="profile_name">
                                    <h2 className="feed_name"><strong>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</strong></h2>                                
                                </div>
                            </div>
                            <div id="headline_feed">{this.props.profile.headline}</div>
                        </div> : 
                        <div className="info_section">
                            <div className="currentUser_info">
                                <div className="profile_name">
                                    <h2 className="feed_name"><strong>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</strong></h2>
                                </div>
                            </div>
                        </div>

        return(
            <div className="feed" key={this.props.posts}>
                <div className="currentUser">
                        <div className="feed_banner">
                            <img className="profile_banner" src={window.banner} />
                            <div className="avatar_sec">{avatar}</div>
                            {/* <div className="add_banner_photo"><AiFillCamera/></div> */}
                        </div>
                        {profile}
                </div>
                  <div>    
                    <div className="post_container">
                        <div className="posting_header">
                            <div className="post_avatar">
                                <div className="posting_avatar">{postingAvatar}</div>
                            </div>
                            <div className="posting_sec">
                                <span className="button_text" onClick={this.handleSubmit}>Start a post</span>
                                <button className="posting_button" onClick={this.handleSubmit}></button>
                            </div>
                        </div>
                        <ul className="post_icons">
                            <li className="post_icon" onClick={this.handleSubmit}>
                                <p className="photo_icon"><HiOutlinePhotograph /></p>
                                <p>Photo</p>
                            </li>
                            <li className="post_icon" onClick={this.handleSubmit}>
                                <p className="video_icon"><AiFillPlaySquare/></p>
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