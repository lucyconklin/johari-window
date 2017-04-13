import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthService from './utils/AuthService';
import ReactDOM from 'react-dom';
import App from './app/App';
import Cohort from './cohort/Cohort';
import Login from './login/Login';
import Main from './main/Main';
import Johari from './johari/Johari';
import NoMatch from './no-match/NoMatch';
import MyWindow from './my-window/MyWindow';
import Admin from './admin/Admin';
import User from './user/User'
import Axios from 'axios'
import './shared.css';

const auth = new AuthService('jH67SpOvPqTg0Jal6m49SCGdECSsFI4L', 'joahriwindow.auth0.com');

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route {...rest} render={props => (
    auth.loggedIn() ? (
      <Component user={user} {...rest}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const setUser = (profile, token) => {
  if(profile) {
    let parsed_profile = JSON.parse(profile)
    let user_info = {"user": {"name": parsed_profile.name, "github": parsed_profile.nickname, "token": token}}
    Axios.post('https://johariwindowapi.herokuapp.com/api/v1/users', user_info)
      .then(result => {
        let user_response = result.data
        let user = new User(user_response)
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch(error => console.log(error))
  } else {
    return false
  }
}

setUser(localStorage.getItem('profile'), localStorage.getItem('id_token'))

const assignUser = () => {
  if(localStorage.getItem('user')) {
    return new User(JSON.parse(localStorage.getItem('user')))
  } else {
    return {}
  }
}

ReactDOM.render(
  <Router >
    <div className='Router'>
    <Route path='/' render={() => <App auth={auth} user={assignUser()} /> } />
      <Switch>
        <PrivateRoute exact path='/' component={Main} user={assignUser()} />
        <Route path='/admin/cohort/:id' render={({match}) => <Cohort cohortID={match.params.id} user={assignUser()} /> } />
        <Route path='/johari/:id' render={({match}) => <Johari evaluateeID={match.params.id} user={assignUser()} /> } />
        <PrivateRoute path='/mywindow' component={MyWindow} user={assignUser()} />
        <PrivateRoute path='/admin' component={Admin} user={assignUser()} />
        <Route path='/login' render={ () => <Login auth={auth} /> } />
        <Route render={() => <NoMatch /> } />
      </ Switch >
    </div>
  </Router>
, document.getElementById('root'));
