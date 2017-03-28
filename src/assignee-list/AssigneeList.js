import React, { Component } from 'react';
import Assignee from '../assignee/Assignee';
import './AssigneeList.css';

class AssigneeList extends Component {
  constructor() {
    super();
    this.state = { assignees: [] };
  }

  eachAssignee(name, i) {
    return <Assignee key={i} name={name} />
  }
    
  // componentDidMount() {
  //   fetch(`insert api url` + this.props.id) 
  //     .then(result=> {
  //       this.setState({assignees: result.json()});
  //     });
  // }

  render() {
    return (
      <div className='AssigneeList'>
        { this.state.assignees.map(this.eachAssignee) }
      </div>
    )
  }
}

export default AssigneeList;
