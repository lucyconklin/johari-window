import React, { Component } from 'react';
import Assignee from '../assignee/Assignee';
import './AssigneeList.css';

class AssigneeList extends Component {
  constructor() {
    super();
    this.state = { assignees: [] };
  }

  componentDidMount() {
    var that = this;
    fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/1/assignments`)
      .then(result => result.json())
      .then(data => that.setState({ assignees: data }))
  }

  eachAssignee(assignee, i) {
    return <Assignee key={i} name={assignee.user.name} id={assignee.user.id} />
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
