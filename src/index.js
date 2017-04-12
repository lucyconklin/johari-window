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

ReactDOM.render(
  <Router>
    <div className='Router'>
    <Route path='/' component={App} auth={ true } />
      <Switch>
        <PrivateRoute exact path='/' component={Main} />
        <PrivateRoute path='/johari/:id' component={Johari} evaluateeID={({match}) => match.params.id}/>
        <PrivateRoute path='/mywindow' component={MyWindow} />
        <Route path='/login' render={ () => <Login auth={auth} /> } />
        <Route render={ () => <NoMatch /> } />
      </ Switch >
    </div>
  </Router>
, document.getElementById('root'));
