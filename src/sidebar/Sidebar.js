import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <div className='sidebar-header'>
          <h3>Johari Window</h3>
        </div>
        <div className='sidebar-links'>
          <Link to='/'>Assignments</Link>
          <Link to='/mywindow'>My Window</Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
