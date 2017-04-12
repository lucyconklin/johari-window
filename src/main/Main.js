import React, { Component } from 'react';
import './Main.css';
import User from '../user/User'
import Header from '../header/Header';
import AssigneeList from '../assignee-list/AssigneeList';

class Main extends Component {
  constructor() {
    super()
    this.state = {
    user: new User(JSON.parse(localStorage.getItem('user')))
  }
  }
  render() {
    return (
      <div className='Main'>
        <Header />
        <AssigneeList />
      </div>
    );
  }
}

export default Main;
