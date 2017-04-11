import React, { Component } from 'react';
import './Cohort.css';
import StudentList from '../student-list/StudentList';
import GroupList from '../group-list/GroupList';

class Cohort extends Component {
  constructor(){
    super();
    this.state = {checkedStudents: [], groups: [], students: []};
    this.toggleStudent = this.toggleStudent.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount(){
    this.retrieveStudents();
  }

  retrieveStudents(){
    var that = this;
    fetch('https://johariwindowapi.herokuapp.com/api/v1/cohorts/' + that.props.cohortID + '/users')
      .then(result => result.json())
      .then(data => {
        that.setState({ students: data })
        return true
    })
  }

  submit(){
    var groups = this.state.groups;
    groups.push(this.state.checkedStudents);
    this.removeStudentsFromList(this.state.checkedStudents);
    this.setState({groups: groups, checkedStudents: []});
  }

  toggleStudent(student){
    let students = this.state.checkedStudents
    let length = students.length
    this.removeStudentFromChecked(student)
    if(this.state.checkedStudents.length === length){
      students.push(student)
    }
    this.setState({ checkedStudents: students })
  }

  removeStudentFromChecked(student){
    let students = this.state.checkedStudents
    for(var i = students.length - 1; i > -1; i--){
      if(students[i].id === student.id){
        students.splice(i,1)
      }
    }
    this.setState({ checkedStudents: students })
  }

  removeStudentFromList(student){
    let students = this.state.students
    for(var i = students.length - 1; i > -1; i--){
      if(students[i].id === student.id){
        students.splice(i,1)
      }
    }
    this.setState({ students: students })
  }

  removeStudentsFromList(students){
    for(var i = 0; i < students.length; i++){
      this.removeStudentFromList(students[i])
    }
  }

  render() {
    return (
      <div className='Cohort'>
        <StudentList cohortID={this.props.cohortID} toggleStudent={this.toggleStudent} submit={this.submit} students={this.state.students}/>
        <GroupList groups={this.state.groups}/>
      </div>
    );
  }
}

export default Cohort;
