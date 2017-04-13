import React, { Component } from 'react';
import './Johari.css';
import AdjectiveList from '../adjective-list/AdjectiveList'
import JohariSubmit from '../johari-submit/JohariSubmit'
import Axios from 'axios'
import { Link } from 'react-router-dom';

class Johari extends Component {

  constructor(props) {
    super(props);
    this.state = { evaluateeName: '', adjectives: [] }

    this.toggleAdjective = this.toggleAdjective.bind(this);
    this.readyToSubmit = this.readyToSubmit.bind(this);
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
    return (this.state.adjectives.length === 15)
  }

  render() {
    return (
      <div className='Johari'>
        <h3 className='johari-title'>Evaluate {this.props.user.name}</h3>
        <p className='directions'>Select 15 that apply.</p>
        <AdjectiveList toggleAdjective={this.toggleAdjective}/>
        <div className='johari-buttons'>
          <JohariSubmit adjectives={this.state.adjectives} user={ this.props.user }
          ready={this.readyToSubmit} evaluateeID={this.props.evaluateeID}/>
          <Link to='/' className='johari-cancel' >Cancel</Link>
        </div>
      </div>
    );
  }
}

export default Johari;
