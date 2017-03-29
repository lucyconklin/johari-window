import React, { Component } from 'react';
import './App.css';
import SideBar from '../sidebar/Sidebar';
import Main from '../main/Main';
import Johari from '../johari/Johari'

class App extends Component {

  constructor() {
    super();
    this.state = { onJohari: false }
  }

  renderPage() {
    if (this.state.onJohari) {
      return (
      <div className='App'>
        <SideBar />
        <Johari />
      </div>
    )
    } else {
      return (
        <div className='App'>
          <SideBar />
          <Main />
        </div>
      )
    }
  }

  render() {
    if (this.state.onJohari) {
      return (
      <div className='App'>
        <SideBar />
        <Johari />
      </div>
    )
    } else {
      return (
        <div className='App'>
          <SideBar />
          <Main />
        </div>
      )
    }
  }
}

export default App;
