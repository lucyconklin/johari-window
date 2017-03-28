import React, { Component } from 'react';
import './Johari.css';
import AdjectiveList from '../adjective-list/AdjectiveList'

class Johari extends Component {
  render() {
    return (
      <div className='Johari'>
        <AdjectiveList />
      </div>
    );
  }
}

export default Johari;
