import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  componentDidMount() {
    this.setState({ name: JSON.parse(localStorage.getItem('profile')).name });
  }

  render() {
    return (
      <div className="Header">
        <h3>{ this.state.name }</h3>
      </div>
    );
  }
}

export default Header;
