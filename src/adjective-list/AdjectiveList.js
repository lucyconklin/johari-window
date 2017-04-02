import React, { Component } from 'react';
import Adjective from '../adjective/Adjective';
import './AdjectiveList.css';

class AdjectiveList extends Component {
  constructor() {
    super();
    this.state = { adjectives: [] };

    this.toggleAdjective = this.toggleAdjective.bind(this);
    this.eachAdjective = this.eachAdjective.bind(this);
  }

  componentDidMount() {
    if (localStorage.adjectives) { this.setAdjectivesLocally() }
    else { this.retrieveAdjectives() }
  }

  setAdjectivesLocally() {
    var adjectiveList = localStorage.getItem('adjectives').split(',')
    this.setState({ adjectives: adjectiveList })
  }

  retrieveAdjectives() {
    var that = this;
    fetch('https://johariwindowapi.herokuapp.com/api/v1/adjectives')
        .then(result => result.json())
        .then(data => {
          that.setState({ adjectives: data })
          localStorage.setItem('adjectives', data)
          return true
        })    
  }

  toggleAdjective(adjective) {
    this.props.toggleAdjective(adjective)
  }

  eachAdjective(name, i) {
    return <Adjective key={i} name={name} toggleAdjective={this.toggleAdjective} />
  }

  render() {
    return (
      <div className='AdjectiveList'>
        { this.state.adjectives.map(this.eachAdjective) }
      </div>
    )
  }
}

export default AdjectiveList;
