import React, { PropTypes as T } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import AuthService from '../utils/AuthService';
import './Login.css'

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  constructor() {
    super()
    this.state = {
      redirectRoot: this.findUser()
    };
    
  }

  findUser() {
    return !!localStorage.getItem('profile')
  }


  loginAndRedirect = new Promise((resolve, reject) => {
      this.props.auth.login(this)
    })

  render() {
    if (this.state.redirectRoot) {
      return (
        <Redirect to='/' />
      )
    }

    const LoginButton = withRouter(({ history }) => (
      <button
        onClick={() => {
          this.loginAndRedirect(this).then(this.setState({redirectRoot: this.findUser()})
          )}}>Login</button>
    ))

    return (
      <div className='Login'>
        <h2>Login</h2>
        <LoginButton />
      </div>
    )
  }
}

export default Login;
