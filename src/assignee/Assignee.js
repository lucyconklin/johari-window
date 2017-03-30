import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Assignee.css';

class Assignee extends Component {

  render() {
    return (
      <div className="Assignee">
        <Link to={'/johari/' + this.props.id}>{ this.props.name }</Link>
      </div>
    );
  }
}

export default Assignee;
