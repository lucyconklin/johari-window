import React, { Component } from 'react';
import Assignee from '../assignee/Assignee';
import User from '../user/User'
import './AssigneeList.css';

class AssigneeList extends Component {
  constructor() {
    super();
    this.state = { assignees: [],
      user: new User(JSON.parse(localStorage.getItem('user'))) }
  }

  componentDidMount() {
    fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/${this.state.user.id}/assignments`)
      .then(result => result.json())
      .then(data => this.setState({ assignees: data }))
  }

  eachAssignee(assignee, i) {
    return <Assignee key={i} name={assignee.user.name} id={assignee.user.id} completed={assignee['completed?']} />
  }

  render() {
    return (
      <div className='AssigneeList'>
        { this.state.assignees.map(this.eachAssignee) }
      </div>
    )
  }
}

export default AssigneeList;
