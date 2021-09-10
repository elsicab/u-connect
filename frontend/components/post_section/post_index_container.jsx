import { connect } from 'react-redux';
import React from 'react';
import { removePost, fetchPosts  } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = state => {
  return {
    // errors: errors.session,
    author: state.entities.posts.author,
    posts: Object.values(state.entities.posts).reverse()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    removePost: postId => dispatch(removePost(postId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);