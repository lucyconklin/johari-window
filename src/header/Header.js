import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="Header">
        <h3>{ this.props.user.name }</h3>
      </div>
    );
  }
}

export default Header;
