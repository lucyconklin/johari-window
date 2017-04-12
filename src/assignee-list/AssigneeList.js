import React, { Component } from 'react';
import Assignee from '../assignee/Assignee';
import './AssigneeList.css';

class AssigneeList extends Component {
  constructor(props) {
    super(props);
    this.state = { assignees: [] }
  }

  componentDidMount() {
    fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/${this.props.user.id}/assignments`)
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
