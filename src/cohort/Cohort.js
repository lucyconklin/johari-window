import React, { Component } from 'react';
import './Cohort.css';
import StudentList from '../student-list/StudentList';
import GroupList from '../group-list/GroupList';

class Cohort extends Component {

  render() {
    return (
      <div className='Cohort'>
        <StudentList cohortID={this.props.cohortID} />
        <GroupList />
      </div>
    );
  }
}

export default Cohort;
