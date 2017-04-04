import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"
import AuthService from 'utils/AuthService'

import Login from '../Login/Login';
import Container from './Container';
import Main from '../main/Main';
import Johari from '../johari/Johari';
import Sidebar from '../sidebar/Sidebar';
import NoMatch from '../no-match/NoMatch';
import MyWindow from '../my-window/MyWindow';

const auth = new AuthService('jH67SpOvPqTg0Jal6m49SCGdECSsFI4L', 'joahriwindow.auth0.com');

class App extends Component {
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
              />
              <Route
                key='3'
                path='/login'
                render={ () => <Login /> }
              />
              <Route
                key='4'
                render={ () => <NoMatch /> }
              />
            </ Switch >
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
