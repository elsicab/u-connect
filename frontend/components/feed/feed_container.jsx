import React from 'react';
import Feed from './feed';
import { connect } from 'react-redux'

const mSTP = state => ({
    posts: state.entities.posts,
    session: state.session,
    currentUser: state.entities.currentUser
})

export default connect(mSTP, null)(Feed);