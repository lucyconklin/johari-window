import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Assignee.css';

class Assignee extends Component {
  constructor() {
    super();
    this.completedAssignee = this.completedAssignee.bind(this)
    this.incompleteAssignee = this.incompleteAssignee.bind(this)
  }

  completedAssignee() {
    return (
      <div className={'Assignee completed-assignee'}>
        <a>{ this.props.name }</a>
      </div>
    )
  }

  incompleteAssignee() {
    return (
      <div className={'Assignee incomplete-assignee'}>
        <Link to={'/johari/' + this.props.id}>{ this.props.name }</Link>
      </div>
    )
  }

  render() {
    if (this.props.completed) { return this.completedAssignee() }
    else { return this.incompleteAssignee() }
  }
}

export default Assignee;
