import React, { Component } from 'react';
import './Assignee.css';

class Assignee extends Component {

  render() {
    return (
      <div className="Assignee">
        <a href='/'>{ this.props.name }</a>
      </div>
    );
  }
}

export default Assignee;
