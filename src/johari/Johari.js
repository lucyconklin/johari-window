import React, { Component } from 'react';
import './Johari.css';
import AdjectiveList from '../adjective-list/AdjectiveList'

class Johari extends Component {
  constructor() {
    super();
    this.state = { evaluateeName: 'Hardcoded Name' };
  }

  render() {
    return (
      <div className='Johari'>
        <h3 className='johari-title'>Evalute {this.state.evaluateeName}</h3>
        <p className='directions'>Select ten that apply.</p>
        <AdjectiveList />
      </div>
    );
  }
}

export default Johari;
