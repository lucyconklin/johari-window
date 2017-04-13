import React, { Component } from 'react';
import './SubmitGroup.css';

class SubmitGroup extends Component {
  constructor(){
    super();
    this.submit = this.submit.bind(this);
  }
  submit(){
    this.props.submit()
  }
  render(){
    return (
      <div>
        <a onClick={this.submit} className='SubmitGroup' >Add Group</a>
      </div>
    )
  }
}

export default SubmitGroup;
