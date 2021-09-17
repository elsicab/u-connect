import React from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiFillPlaySquare } from 'react-icons/ai';
import { RiCalendarEventFill } from 'react-icons/ri';
import { RiArticleLine } from 'react-icons/ri';
import PostIndexContainer from './post_index';
import { fetchProfiles } from '../../actions/profile_actions';

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
                            {/* <li className="post_icon">
                                <p className="event_icon"><RiCalendarEventFill/></p>
                                <p>Event</p>
                            </li>
                            <li className="post_icon">
                                <p className="article_icon"><RiArticleLine/></p>
                                <p>Write article</p>
                            </li> */}
                        </ul>
                    </div>
                    <div className="posts_feed">
                        <PostIndexContainer />
                    </div> 
                </div>  
                <div className="right_side">
                    <div className="news">
                        <div className="extra_sec_header">WiredIn News</div>
                        <ul id="news_list">
                            <li>NYC bets big on Broadway's comeback
                                <p>11h ago  2,476 readers</p>
                            </li>
                            <li>Dread turns to fear for commuters
                                <p>13h ago   13,654 readers</p>
                            </li>
                            <li>Craft beer's moment of reckoning
                                <p>7h ago   13,654 readers</p>
                            </li>
                            <li>Apple's latest product reveal
                                <p>8h ago   38,552 readers</p>
                            </li>
                            <li>Homes, sweet... where are the homes?
                                <p>2h ago   1,038 readers</p>
                            </li>
                        </ul>
                    </div>
                    <div className="courses">
                        <div className="extra_sec_header">Today’s top courses</div>
                        <ol id="course_list">
                            <li>Customer Experience Leadership
                                <p>Brad Cleveland</p>
                            </li>
                            <li>How to Be an Inclusive Leader
                                <p>getAbstract</p>
                            </li>
                            <li>Unconscious Bias
                                <p>Stacey Gordon</p>
                            </li>
                        </ol>
                        <h2>Show more on WiredIn Learning</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;