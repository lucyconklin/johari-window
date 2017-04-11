import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostGroups.css';

class PostGroups extends Component {
  constructor(){
    super();
    this.post = this.post.bind(this)
  }

  post(){
    this.props.post();
  }

  render(){
    return (
      <div className='PostGroup'>
        <Link onClick={this.post} to='/admin'>Submit All Groups</Link>
      </div>
    )
  }
}

export default PostGroups;
