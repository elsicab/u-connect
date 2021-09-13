import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import  SignUpContainer  from "./sessions/signup_container";
import SignInContainer from './sessions/signin_container';
import FeedContainer from './feed/feed_container';
import HomePageContainer from './home/home_container';
import Modal from './modal/modal';
import UserContainer from '../components/profile/user_profile_container';



const App = () => (
    <div>
        <Modal />
        <Switch>
            {/* <Route exact path="/home" component={Home} /> */}
            <ProtectedRoute path="/profile" component={UserContainer} />
            <AuthRoute path="/signup" component={SignUpContainer} />
            <AuthRoute path="/login" component={SignInContainer} />
            <ProtectedRoute path="/feed" component={FeedContainer} />
            <AuthRoute path="/" component={HomePageContainer} />

            {/* Protected Route to user page */}
            {/* Body 
            *Sidebar (left)
            *Feed
            *Sidebar (right) */}
        </Switch>
    </div>
)

export default App;