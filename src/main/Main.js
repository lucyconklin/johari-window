import React, { Component } from 'react';
import './Main.css';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import AssigneeList from '../assignee-list/AssigneeList';

class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <Sidebar />
        <Header />
        <AssigneeList />
      </div>
    );
  }
}

export default Main;
