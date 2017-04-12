import React, { Component } from 'react';
import Sidebar from '../sidebar/Sidebar';
import User from '../user/User'
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { user: new User(JSON.parse(localStorage.getItem('user')) || {} )}
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
