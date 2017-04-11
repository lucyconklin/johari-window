import React, { Component } from 'react';
import './Group.css';
import DeleteGroup from '../delete-group/DeleteGroup'

class Group extends Component {
  constructor(){
    super();
    this.delete = this.delete.bind(this);
  }

  delete(){
    this.props.delete(this.props.students);
  }

  eachStudent(student, i){
    return <p key={i}>{ student.name }</p>
  }

  render() {
    return (
      <div className='Group'>
        { this.props.students.map(this.eachStudent) }
        <DeleteGroup delete={this.delete}/>
      </div>
    );
  }
}

export default Group;
