import React, { Component, PropTypes as T } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../utils/AuthService';
import './Sidebar.css';

class Sidebar extends Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props.auth
    return (
      <div className='Sidebar'>
        <div className='sidebar-header'>
          <h1>Johari Window</h1>
        </div>
        <div className='sidebar-links'>
          <Link to='/'>Assignments</Link>
          <Link to='/mywindow'>My Window</Link>
          <Link to='/admin'>Admin</Link>
        </div>
        <div className='sidebar-user-info'>
          <p>logged in as: {this.props.user.name}</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;
