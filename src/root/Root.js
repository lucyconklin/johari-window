import React, { Component } from 'react';
import './Root.css';
import Header from '../header/Header';
import AssigneeList from '../assignee-list/AssigneeList';

class Root extends Component {

  constructor() {
    super();
    this.state = { name: 'Hardcoded Name' };
  }

  // componentDidMount() {
  //   fetch(`insert api url` + this.props.id) 
  //     .then(result=> {
  //       this.setState({name: result.json()});
  //     });
  // }

  render() {
    return (
      <div className='root'>
        <Header name={ this.state.name }/>
        <AssigneeList />
      </div>
    );
  }
}

export default Root;
