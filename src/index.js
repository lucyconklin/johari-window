import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthService from './utils/AuthService';
import ReactDOM from 'react-dom';
import App from './app/App';
import Login from './login/Login';
import Main from './main/Main';
import Johari from './johari/Johari';
import NoMatch from './no-match/NoMatch';
import MyWindow from './my-window/MyWindow';
import User from './user/User'
import Axios from 'axios'
import './shared.css';

const auth = new AuthService('jH67SpOvPqTg0Jal6m49SCGdECSsFI4L', 'joahriwindow.auth0.com');

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.loggedIn() ? (
      <Component {...props}/>
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
        return user
      })
      .catch(error => console.log(error))
  } else {
    return false
  }
}

const user = setUser(localStorage.getItem('profile'), localStorage.getItem('id_token'))

ReactDOM.render(
  <Router >
    <div className='Router'>
    { console.log(user) }
    <Route path='/' render={() => <App auth={auth} setUser={setUser} /> } />
      <Switch>
        <PrivateRoute exact path='/' component={Main} user={user} />
        <PrivateRoute path='/johari/:id' component={Johari} evaluateeID={({match}) => match.params.id} user={user} />
        <PrivateRoute path='/mywindow' component={MyWindow} user={user} />
        <Route path='/login' render={ () => <Login auth={auth} /> } />
        <Route render={ () => <NoMatch /> } />
      </ Switch >
    </div>
  </Router>
, document.getElementById('root'));
