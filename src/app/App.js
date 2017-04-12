import React, { Component } from 'react';
import Axios from 'axios';
import Sidebar from '../sidebar/Sidebar';
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.setState({user: this.props.setUser(localStorage.getItem('profile'), localStorage.getItem('id_token'))})
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
