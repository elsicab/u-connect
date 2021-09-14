import React from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { AiFillPlaySquare } from 'react-icons/ai';
import { RiCalendarEventFill } from 'react-icons/ri';
import { RiArticleLine } from 'react-icons/ri';
import PostIndexContainer from './post_index';

class Post extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    // componentDidMount() {
    //     this.props.fetchPosts();
    // }

    handleSubmit(e){
        e.preventDefault();
        this.props.openModal('postForm')
    }

    render(){
        const avatar = this.props.currentUser.avatarUrl ? <img className= "avatar_profile" src={this.props.currentUser.avatarUrl} /> : <img className="avatar_profile" src={window.avatar} />
        return(
            <div className="feed" key={this.props.posts}>
                <div className="currentUser">
                        <div className="feed_banner">
                            <img className="profile_banner" src={window.banner} />
                            <div className="avatar_sec">{avatar}</div>
                            {/* <div className="add_banner_photo"><AiFillCamera/></div> */}
                        </div>
                        <div className="info_section">
                            <div className="currentUser_info">
                                <div className="profile_name">
                                    <h2 className="username"><strong>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</strong></h2>
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
                  <div>    
                    <div className="post_container">
                        <span className="button_text" onClick={this.handleSubmit}>Start a post</span>
                        <button className="post_button" onClick={this.handleSubmit}></button>
                        <ul className="post_icons">
                            <li className="post_icon">
                                <p className="photo_icon"><HiOutlinePhotograph /></p>
                                <p>Photo</p>
                            </li>
                            <li className="post_icon">
                                <p className="video_icon"><AiFillPlaySquare/></p>
                                <p>Video</p>
                            </li>
                            <li className="post_icon">
                                <p className="event_icon"><RiCalendarEventFill/></p>
                                <p>Event</p>
                            </li>
                            <li className="post_icon">
                                <p className="article_icon"><RiArticleLine/></p>
                                <p>Write article</p>
                            </li>
                        </ul>
                    </div>
                    <div className="posts_feed">
                        <PostIndexContainer />
                    </div> 
                </div>  
                <div className="currentUser">
                        <div className="feed_banner">
                            <img className="profile_banner" src={window.banner} />
                            <div className="avatar_sec">{avatar}</div>
                            {/* <div className="add_banner_photo"><AiFillCamera/></div> */}
                        </div>
                        <div className="info_avatar">
                            <div className="currentUser_info">
                                <div className="profile_name">
                                    <h2 className="username"><strong>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</strong></h2>
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
            </div>
        )
    }
}

export default Post;