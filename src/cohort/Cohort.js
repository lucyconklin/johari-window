import React, { Component } from 'react';
import './Cohort.css';
import StudentList from '../student-list/StudentList';
import GroupList from '../group-list/GroupList';

class Cohort extends Component {
  constructor(){
    super();
    this.state = {checkedStudents: []}
    this.toggleStudent = this.toggleStudent.bind(this)
  }

  toggleStudent(student){
    let students = this.state.checkedStudents
    let length = students.length
    for(var i = length - 1; i > -1; i--){
      if(students[i].id === student.id){
        students = students.splice(i,1)
      }
    }
    if(students.length === length){
      students.push(student)
    }
    this.setState({ checkedStudents: students })
  }

  render() {
    return (
      <div className='Cohort'>
        <StudentList cohortID={this.props.cohortID} toggleStudent={this.toggleStudent} />
        <GroupList />
      </div>
    );
  }
}

export default Cohort;
