import React, { Component } from 'react';
import './SubmitGroup.css';

class SubmitGroup extends Component {

  render(){
    return (
      <div>
        <a onClick={this.props.submit} className='SubmitGroup' >Add Group</a>
      </div>
    )
  }
}

export default SubmitGroup;
