import React, { Component } from 'react';
import './Assignee.css';

class Assignee extends Component {
  constructor() {
    super();
    this.name = 'Name'
  }

  // componentDidMount() {
  //   fetch(`insert api url` + this.props.id) 
  //     .then(result=> {
  //       this.setState({name: result.json()});
  //     });
  // }

  render() {
    return (
      <div className="Assignee">
        <a href='/'>{ this.props.name }</a>
      </div>
    );
  }
}

export default Assignee;
