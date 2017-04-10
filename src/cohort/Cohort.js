import React, { Component } from 'react';
import './Cohort.css';
import studentList from '../studentList/studentList';

class Cohort extends Component {

  render() {
    return (
      <div className='Cohort'>
        <studentList /> 
      </div>
    );
  }
}

export default Cohort;
