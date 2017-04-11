import React, { Component } from 'react';
import './StudentList.css';
import Student from '../student/Student';
import SubmitGroup from '../submit-group/SubmitGroup';

class StudentList extends Component {
  constructor(){
    super();
    this.state = {students: []};
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

  eachStudent(student, i){
    return <Student key={i} name={student.name} id={student.id} />
  }
  render() {
    return (
      <div className='StudentList'>
        <h1>Select students to create groups.</h1>
        <div className='student-list'>
          { this.state.students.map(this.eachStudent) }
        </div>
        <SubmitGroup />
      </div>
    );
  }
}

export default StudentList;
