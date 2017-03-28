import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-title">
          <h2>Johari Window</h2>
        </div>
        <div className="Header-username">
          <h3>{ this.props.name }</h3>
        </div>
      </div>
    );
  }
}

export default Header;
