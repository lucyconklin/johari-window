import React, { PropTypes as T } from 'react';
import { Redirect } from 'react-router-dom';
import AuthService from '../utils/AuthService';

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id_token: localStorage.getItem('id_token')
    }
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        <h2>Login</h2>
        <button onClick={auth.login.bind(this)}>Login</button>
      </div>
    )
  }
}

export default Login;