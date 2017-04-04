import React, { Component } from 'react';

export class Container extends Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }

    return (
      <div>
        <h2 className="main-title">
          <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" alt="authO badge"/>
        </h2>
        { children }
      </div>
    )
  }
}

export default Container;