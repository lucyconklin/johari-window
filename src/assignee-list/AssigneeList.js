import React, { Component } from 'react';
import Assignee from '../assignee/Assignee';
import './AssigneeList.css';

class AssigneeList extends Component {
  constructor() {
    super();
    this.state = { assignees: [] };
  }

  // componentDidMount() {
  //   fetch(`insert api url` + this.props.id) 
  //     .then(result=> {
  //       this.setState({assignees: result.json()});
  //     });
  // }

  eachAssignee(name, i) {
    return <Assignee key={i} name={name} />
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
