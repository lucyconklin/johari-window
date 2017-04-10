import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css"
import Sidebar from '../sidebar/Sidebar'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
          {this.props.routes}
        </Router>
      </div>
    )
  }
}

export default App;
