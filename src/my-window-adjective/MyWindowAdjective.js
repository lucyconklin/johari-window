import React, { Component } from 'react'
import './MyWindowAdjective.css'

class MyWindowAdjective extends Component {

  render() {
    const style = { opacity: this.props.frequency }
    return (
      <div className='MyWindowAdjective'>
        <li className='johari-window-adjective' style={ style }>{ this.props.name }</li>
      </div>
    )
  }

}

export default MyWindowAdjective;
