import React, { Component } from 'react';
import './StudentList.css';
import Student from '../student/Student';
import SubmitGroup from '../submit-group/SubmitGroup';

class StudentList extends Component {
  constructor(){
    super();
    this.eachStudent = this.eachStudent.bind(this);
    this.toggleStudent = this.toggleStudent.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(){
    this.props.submit()
  }

  toggleStudent(student){
    this.props.toggleStudent(student);
  }

  eachStudent(student, i){
    return <Student key={student.id} name={student.name} id={student.id} toggleStudent={this.toggleStudent} />
  }

  render() {
    return (
      <div className='StudentList'>
        <h1>Select students to create groups.</h1>
        <div className='student-list'>
          { this.props.students.map(this.eachStudent) }
        </div>
        <SubmitGroup submit={this.submit} />
      </div>
    );
  }
}

export default StudentList;
