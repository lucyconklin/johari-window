import React, { PropTypes as T } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../utils/AuthService';

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div className="authO">
        <h2>Login</h2>
          <Link className="button" onClick={auth.login.bind(this)}>Login</Link>
      </div>
    )
  }
}

export default Login;