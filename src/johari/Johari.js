import React, { Component } from 'react';
import './Johari.css';
import AdjectiveList from '../adjective-list/AdjectiveList'
import JohariSubmit from '../johari-submit/JohariSubmit'
import { Link } from 'react-router-dom';

class Johari extends Component {

  constructor() {
    super();
    this.state = { evaluateeName: '', adjectives: [] };

    this.toggleAdjective = this.toggleAdjective.bind(this);
    this.getName = this.getName.bind(this);
    this.readyToSubmit = this.readyToSubmit.bind(this);
  }

  componentDidMount() {
    this.getName()
  }

  toggleAdjective(adjective) {
    let adjectives = this.state.adjectives
    if (adjectives.includes(adjective)) {
      adjectives = adjectives.filter(name => name !== adjective)
    } else {
      adjectives.push(adjective)
    }
    this.setState({ adjectives: adjectives }) 
  }

  readyToSubmit() {
    return (this.state.adjectives.length === 1)
  }

  getName() {
    fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/${this.props.evaluateeID}`)
    .then(result => result.json())
    .then(data => this.setState({ evaluateeName: data.name }))
  }

  render() {
    return (
      <div className='Johari'>
        <h3 className='johari-title'>Evaluate {this.state.evaluateeName}</h3>
        <p className='directions'>Select ten that apply.</p>
        <AdjectiveList toggleAdjective={this.toggleAdjective}/>
        <div className='johari-buttons'>
          <JohariSubmit adjectives={this.state.adjectives}
          ready={this.readyToSubmit} evaluateeID={this.props.evaluateeID}/>
          <Link to='/' className='johari-cancel' >Cancel</Link>
        </div>
      </div>
    );
  }
}

export default Johari;
