import React, { Component } from 'react';
import './Student.css';

class Student extends Component {
  constructor(props){
    super(props)
    this.toggleStudent = this.toggleStudent.bind(this)
  }
  toggleStudent(){
    this.props.toggleStudent({name: this.props.name, id: this.props.id})
  }
  render() {
    return (
      <div className='Student'>
        <input type="checkbox" className='checkbox' id={ this.props.name } onChange={this.toggleStudent} />
        <label htmlFor={ this.props.name }>{ this.props.name }</label>
      </div>
    );
  }
}

export default Student;
