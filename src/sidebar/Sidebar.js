import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-header'>
          <h3>Johari Window</h3>
        </div>
        <div className='sidebar-links'>
          <a>Assignments</a>
          <a>My Window</a>
        </div>
      </div>
    );
  }
}

export default Sidebar;