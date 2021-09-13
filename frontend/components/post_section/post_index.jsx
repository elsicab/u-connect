import React from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { AiOutlineLike } from 'react-icons/ai';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { RiShareForwardLine } from 'react-icons/ri';
import { IoIosSend } from 'react-icons/io';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { BiPencil } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';

class PostIndex extends React.Component{
    constructor(props){
        super(props)
         this.state = {
            posts: [],
            openMenu: false 
        };
        this.handleFocus = this.handleFocus.bind(this); 
        this.timepassed = this.timepassed.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFocus(e) {
        const newState = !this.state.openMenu 
        this.setState({openMenu: newState})
    }

    componentDidMount() {
        this.props.fetchPosts();
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.openModal('editForm')
    }
    // componentDidUpdate(){
    //     this.props.fetchPosts();
    // }

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
        if(!this.props.posts) return null
        const showPosts = this.props.posts.reverse().map((post, i) => (
            <div key={`${i}`} className="single_post">
                <div className="post_menu" >
                    <button onFocus={this.handleFocus} onBlur={this.handleFocus}><BiDotsHorizontalRounded/>
                    </button>
                    <ul onClick={e => e.stopPropagation()} className={this.state.openMenu ? "show-dropdown" : "clear"}>
                        <li onClick={this.handleSubmit}><BiPencil/>  Edit post</li>
                        <li onClick={() => this.props.removePost(post.id)}><FaTrashAlt/>  Delete post</li>
                    </ul>
                </div>
                <div className="post_info">
                    <p><BsPersonBoundingBox/></p>
                    <div className="author_info">
                        <div className="author_name">
                            <p>{post?.author?.first_name}</p>
                            <p>{post?.author?.last_name}</p>
                        </div>
                        <div className="created">
                            <p>{this.timepassed(post.created_at)}</p>
                        </div>
                    </div>
                </div>
                <div><img className= "post_image" src={post.photoUrl} /></div>
                <div className="post_text">{post.body}</div>
                <ul className="post_interactions">
                    <li><AiOutlineLike/>  Like</li>
                    <li><BiCommentDetail/>  Comment</li>
                    <li><RiShareForwardLine/>  Share</li>
                    <li><IoIosSend/>  Send</li>
                </ul>
            </div>
            ));
            
        
        return(

            <div>
                {!this.props.posts ?  null : showPosts}
             
            </div>
        )

    }
}

export default PostIndex;