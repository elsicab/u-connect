import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/feed" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  //  debugger
  return(
  <Route path={path} exact={exact} render={(props) => (
    
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/feed" />
    )
  )} />)
};

const mSTP = state => ({
    loggedIn: Boolean(state.session.currentUser)
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));