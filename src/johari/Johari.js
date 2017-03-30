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
        <div className='johari-buttons'>
          <Link onClick={this.submit} to='/' className='johari-submit'>Submit</Link>
          <Link to='/' className='johari-cancel' >Cancel</Link>
        </div>
      </div>
    );
  }
}

export default Johari;
