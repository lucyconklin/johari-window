import React, { Component } from 'react';
import Sidebar from '../sidebar/Sidebar';
import "./App.css"

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Sidebar user={this.props.user} auth={this.props.auth}/>
      </div>
    )
  }
}

export default App;
