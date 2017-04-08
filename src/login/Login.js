import React, { PropTypes as T } from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from '../utils/AuthService';

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  
  render() {
    const { auth } = this.props

    const onAuthRedirect = (history) => {
      auth.login(this).on('profile_updated', history.push('/'))
    }

    const LoginButton = withRouter(({ history }) => (
      <button 
        onClick={() => onAuthRedirect(history)}>Login</button>
    ))
    
    return (
      <div>
        <h2>Login</h2>
        <LoginButton />
      </div>
    )
  }
}

export default Login;
