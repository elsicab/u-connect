import React from 'react';
import Navbar from './navbar/navbar';
import { Route, Switch  } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import  SignUpContainer  from "./sessions/signup_container";
import SignInContainer from './sessions/signin_container';
import Home from './home/home';



const App = () => (
    <div>
        <Route path="/" component={Navbar} />
        <Switch>
            <Route exact path="/home" component={Home} />
            <AuthRoute path="/signup" component={SignUpContainer} />
            <AuthRoute path="/login" component={SignInContainer} />
            <AuthRoute path="/signin" component={SignInContainer} />
            {/* Protected Route to user page */}
            {/* Body 
            *Sidebar (left)
            *Feed
            *Sidebar (right) */}
        </Switch>
    </div>
)

export default App;