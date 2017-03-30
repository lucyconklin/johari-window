import React, { Component } from 'react';
import './Johari.css';
import AdjectiveList from '../adjective-list/AdjectiveList'

class Johari extends Component {
  render() {
    return (
      <div className='Johari'>
        <p className='directions'>Select ten that apply.</p>
        <AdjectiveList />
      </div>
    );
  }
}

export default Johari;
