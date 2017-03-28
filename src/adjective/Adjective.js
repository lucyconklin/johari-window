import React, { Component } from 'react';
import './Adjective.css';

class Adjective extends Component {

  render() {
    return (
      <div className='Adjective'>
        <input type="checkbox" id={ this.props.name } />
        <label htmlFor={ this.props.name }>{ this.props.name }</label>
      </div>
    )
  }
}

export default Adjective;