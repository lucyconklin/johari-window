import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./Container.css"
import Sidebar from '../sidebar/Sidebar';

class Container extends Component {
  render() {
    return (
      <div className='Container'>
        <Sidebar />
      </div>
    )
  }
}

export default Container;
