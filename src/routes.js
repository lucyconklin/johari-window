import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';

import Main from './main/Main'
import Johari from './johari/Johari'
import NoMatch from './no-match/NoMatch'
import MyWindow from './my-window/MyWindow'
import Login from './login/Login'
import App from './app/App'
import Container from './container/Container'
import AuthService from './utils/AuthService'

const auth = new AuthService('jH67SpOvPqTg0Jal6m49SCGdECSsFI4L', 'joahriwindow.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <Route path="login" component={Login} />
      <Route path="johari" component={Johari} onEnter={requireAuth}  />
      <Route path="main" component={Main} onEnter={requireAuth} />
      <Route path="mywindow" component={MyWindow} onEnter={requireAuth} />
      <Route path="" component={NoMatch} />
    </Route>
  )
}

export default makeMainRoutes;
