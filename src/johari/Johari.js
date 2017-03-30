import React, { Component } from 'react';
import './Johari.css';
import AdjectiveList from '../adjective-list/AdjectiveList'
import { Link } from 'react-router-dom';

class Johari extends Component {

  constructor() {
    super();
    this.state = { evaluateeName: 'Hardcoded Name', adjectives: []};

    this.submit = this.submit.bind(this);
    this.toggleAdjective = this.toggleAdjective.bind(this);
  }

  toggleAdjective(adjective) {
    console.log(this.state.adjectives)
    if (this.state.adjectives.includes(adjective)) {
      const newList = this.state.adjectives.filter(name => name !== adjective)
      this.setState({ adjectives: newList }) 
    } else {
      this.state.adjectives.push(adjective)
    }
  }

  submit() {
    fetch(`https://johariwindowapi.herokuapp.com/api/v1/johari/${this.props.evaluateeID}/descriptions`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        johari: this.state.adjectives,
        describer_id: '1',
      })
    })
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className='Johari'>
        <h3 className='johari-title'>Evalute {this.state.evaluateeName}</h3>
        <p className='directions'>Select ten that apply.</p>
        <AdjectiveList toggleAdjective={this.toggleAdjective}/>
        <div className='johari-buttons'>
          <Link onClick={this.submit} to='/' className='johari-submit'>Submit</Link>
          <Link to='/' className='johari-cancel' >Cancel</Link>
        </div>
      </div>
    );
  }
}

export default Johari;
