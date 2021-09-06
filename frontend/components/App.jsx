import React from 'react';
import { Route, Switch  } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import  SignUpContainer  from "./sessions/signup_container";
import SignInContainer from './sessions/signin_container';
import Feed from './feed/feed';
import HomePageContainer from './home/home_container';



const App = () => (
    <div>
        <Switch>
            {/* <Route exact path="/home" component={Home} /> */}
            <Route path="/signup" component={SignUpContainer} />
            <Route path="/login" component={SignInContainer} />
            <Route path="/feed" component={Feed} />
            <Route path="/" component={HomePageContainer} />
            {/* Protected Route to user page */}
            {/* Body 
            *Sidebar (left)
            *Feed
            *Sidebar (right) */}
        </Switch>
    </div>
)

export default App;