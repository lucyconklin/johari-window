import React, { Component } from 'react';
import Axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: { user: false }
    }
  }

  componentDidMount() {
    this.setUser(localStorage.getItem('profile'), localStorage.getItem('id_token'))
  }

  setUser(profile, token) {
    if(profile) {
      let parsed_profile = JSON.parse(profile)
      let user_info = {"user": {"name": parsed_profile.name, "github": parsed_profile.nickname, "token": token}}
      Axios.post('https://johariwindowapi.herokuapp.com/api/v1/users', user_info)
        .then(result => {
          let user_response = result.data
          this.setState({user: user_response})
        })
        .catch(error => console.log(error))
    }
  }

  render() {
    return (
      <div className='App'>
        <Sidebar />
      </div>
    )
  }
}

export default App;
