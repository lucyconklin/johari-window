import React, { Component } from 'react';
import './Student.css';

class Student extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className='Student'>
        <input type="checkbox" className='checkbox' id={ this.props.name } onClick={this.toggleAdjective} />
        <label htmlFor={ this.props.name }>{ this.props.name }</label>
      </div>
    );
  }
}

export default Student;
