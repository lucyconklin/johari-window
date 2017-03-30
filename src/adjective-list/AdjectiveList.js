import React, { Component } from 'react';
import Adjective from '../adjective/Adjective';
import './AdjectiveList.css';

class AdjectiveList extends Component {
  constructor() {
    super();
    this.state = { adjectives: [] };
  }

  componentDidMount() {
    var that = this;

    fetch('https://johariwindowapi.herokuapp.com/api/v1/adjectives') 
      .then(result => result.json())
      .then(data => that.setState({ adjectives: data }))
  }

  eachAdjective(name, i) {
    return <Adjective key={i} name={name} />
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
