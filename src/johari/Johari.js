import React, { Component } from 'react';
import './Johari.css';
import AdjectiveList from '../adjective-list/AdjectiveList'

class Johari extends Component {
  constructor() {
    super();
    this.state = { evaluateeName: '' };
    this.getName = this.getName.bind(this);
  }

  getName() {
    fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/${this.props.evaluateeID}`)
    .then(result => result.json())
    .then(data => this.setState({ evaluateeName: data.name }))
  }

  render() {
    this.getName()
    return (
      <div className='Johari'>
        <h3 className='johari-title'>Evaluate {this.state.evaluateeName}</h3>
        <p className='directions'>Select ten that apply.</p>
        <AdjectiveList />
      </div>
    );
  }
}

export default Johari;
