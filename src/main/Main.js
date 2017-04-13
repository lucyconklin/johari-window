import React, { Component } from 'react';
import './Main.css';
import Header from '../header/Header';
import AssigneeList from '../assignee-list/AssigneeList';

class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <Header user={this.props.user}/>
        <AssigneeList user={this.props.user}/>
      </div>
    );
  }
}

export default Main;
