import React, { Component } from 'react';
import './Group.css';

class Group extends Component {
  constructor(){
    super();
  }
  eachStudent(student, i){
    return <p key={i}>{ student.name }</p>
  }
  render() {
    return (
      <div className='Group'>
        { this.props.students.map(this.eachStudent) }
      </div>
    );
  }
}

export default Group;
