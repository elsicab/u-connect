import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import SignUpContainer  from "./sessions/signup_container";
import SignInContainer from './sessions/signin_container';
import FeedContainer from './feed/feed_container';
import HomePageContainer from './home/home_container';
import NetworkContainer from './network/network';
import Modal from './modal/modal';
import UserContainer from '../components/profile/user_profile';



const App = () => (
    <div>
        <Modal />
        <Switch>
            <ProtectedRoute path="/users/:userId" component={UserContainer} />
            <AuthRoute path="/signup" component={SignUpContainer} />
            <AuthRoute path="/login" component={SignInContainer} />
            <ProtectedRoute path="/feed" component={FeedContainer} />
            <ProtectedRoute path="/myNetwork" component={NetworkContainer} />
            <AuthRoute path="/" component={HomePageContainer} />
        </Switch>
    </div>
)

export default App;