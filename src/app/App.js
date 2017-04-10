import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthService from '../utils/AuthService';
import Login from '../login/Login';
import Main from '../main/Main';
import Johari from '../johari/Johari';
import Sidebar from '../sidebar/Sidebar';
import NoMatch from '../no-match/NoMatch';
import MyWindow from '../my-window/MyWindow';
import "./App.css"

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
      user: {} 
    }
    this.setUser(localStorage.getItem('profile'))
  }

  setUser(profile) {
    if(profile) {
      let username = JSON.parse(profile).nickname
      fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/by_github?name=${username}`)
        .then(result => result.json() )
        .then(data => { 
          this.setState({user: data})
          return true
        })
    } 
  }
  
  render() {
    return (
      <div className='App'>
        <Router>
          <div className='Router'>
            <Sidebar auth={auth} />
            <Switch>
              <Route
                key='1'
                path='/johari/:id'
                onEnter={requireAuth} 
                render={ ({match}) => <Johari evaluateeID={match.params.id} user={this.props.user}/> }
              />
              <Route
                key='3'
                path='/mywindow'
                onEnter={requireAuth} 
                render={ () => <MyWindow user={this.props.user}/> }
              />
              <Route
                key='2'
                exact={true}
                path='/'
                onEnter={requireAuth} 
                render={ () => <Main user={this.props.user}/> }
              />
              <Route
                key='3'
                path='/login'
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
