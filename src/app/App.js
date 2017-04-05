import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import AuthService from '../utils/AuthService';
import Login from '../login/Login';
import Container from '../container/Container';
import Main from '../main/Main';
import Johari from '../johari/Johari';
import Sidebar from '../sidebar/Sidebar';
import NoMatch from '../no-match/NoMatch';
import MyWindow from '../my-window/MyWindow';

const auth = new AuthService('jH67SpOvPqTg0Jal6m49SCGdECSsFI4L', 'joahriwindow.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {      
    replace({ pathname: '/login' })
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <div className='Router'>
            <Sidebar />
            <Switch>
              <Route
                key='1'
                path='/johari/:id'
                render={ ({match}) => <Johari evaluateeID={match.params.id} /> }
                onEnter={requireAuth}
                auth={auth}
              />
              <Route
                key='3'
                path='/mywindow'
                render={ () => <MyWindow /> }
              />
              <Route
                key='2'
                exact={true}
                path='/'
                render={ () => <Main /> }
                onEnter={requireAuth}
                auth={auth}
              />
              <Route
                key='3'
                path='/login'
                auth={auth}
                render={ () => <Login auth={auth} /> }
              />
              <Route
                key='4'
                render={ () => <NoMatch /> }
                auth={auth}
              />
            </ Switch >
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
