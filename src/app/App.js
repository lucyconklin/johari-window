import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthService from '../utils/AuthService';
import Axios from 'axios';
import Login from '../login/Login';
import Main from '../main/Main';
import Johari from '../johari/Johari';
import Sidebar from '../sidebar/Sidebar';
import NoMatch from '../no-match/NoMatch';
import MyWindow from '../my-window/MyWindow';
import "./App.css"

const auth = new AuthService('jH67SpOvPqTg0Jal6m49SCGdECSsFI4L', 'joahriwindow.auth0.com');

const requireAuth = () => {
  if (!auth.loggedIn()) {
    <Redirect to='/login' />
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: { user: true },
      redirectToLogin: true
    }
  }

  componentDidMount() {
    this.setUser(localStorage.getItem('profile'), localStorage.getItem('id_token'))
  }

  setUser(profile, token) {
    if(profile) {
      let parsed_profile = JSON.parse(profile)
      let user_info = {"user": {"name": parsed_profile.name, "github": parsed_profile.nickname, "token": token}}
      Axios.post('http://localhost:5000/api/v1/users', user_info)
        .then(result => {
          console.log(result)
          let user_response = result.data
          this.setState({user: user_response})
          console.log(this.state.user)
        })
        .catch(error => console.log(error))
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
                onEnter={requireAuth()}
                render={ ({match}) => <Johari evaluateeID={match.params.id} user={this.props.user}/> }
              />
              <Route
                key='3'
                path='/mywindow'
                onEnter={requireAuth()}
                render={ () => <MyWindow user={this.props.user}/> }
              />
              <Route
                key='2'
                exact={true}
                path='/'
                onEnter={requireAuth()}
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
              />
            </ Switch >
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
