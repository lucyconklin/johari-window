import React, { Component } from 'react';
import './Cohort.css';
import StudentList from '../student-list/studentList';

class Cohort extends Component {

  render() {
    return (
      <div className='Cohort'>
        <StudentList cohortID={this.props.cohortID} />
      </div>
    );
  }
}

export default Cohort;
