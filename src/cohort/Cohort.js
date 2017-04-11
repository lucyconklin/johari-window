import React, { Component } from 'react';
import './Cohort.css';
import StudentLineup from '../student-list/StudentLineup';
import GroupList from '../group-list/GroupList';

class Cohort extends Component {
  constructor(){
    super();
    this.state = {checkedStudents: [], groups: [], students: []};
    this.toggleStudent = this.toggleStudent.bind(this);
    this.submit = this.submit.bind(this);
    this.delete = this.delete.bind(this);
    this.addToList = this.addToList.bind(this);
    this.post = this.post.bind(this);
  }

  post(){
    console.log(JSON.stringify(this.state.groups))
    fetch(`https://johariwindowapi.herokuapp.com/api/v1/assignments`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({group: this.state.groups})
    })
    .then(data => true)
  }

  delete(group){
    var groups = this.state.groups
    this.addToList(group);
    let id = group[0].id
    for(var i = groups.length - 1; i > -1; i--){
      for(var j = groups[i].length - 1; j > -1; j--){
        if(groups[i][j].id === id){
          groups.splice(i,1)
        }
      }
    }
    this.setState({groups: groups})
  }

  addToList(group){
    var students = this.state.students;
    group.forEach((element) => {
      students.push(element)
    })
    this.setState({students: students})
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
    let checkedStudents = this.state.checkedStudents
    if(checkedStudents.length > 0){
      groups.push(checkedStudents);
      this.removeStudentsFromList(checkedStudents);
      this.setState({groups: groups, checkedStudents: []});
    }

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
        <StudentLineup cohortID={this.props.cohortID} toggleStudent={this.toggleStudent} submit={this.submit} students={this.state.students} />
        <GroupList groups={this.state.groups} delete={this.delete} post={this.post} />
      </div>
    );
  }
}

export default Cohort;
