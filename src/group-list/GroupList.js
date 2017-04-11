import React, { Component } from 'react';
import './GroupList.css';
import Group from '../group/Group';

class GroupList extends Component {
  constructor(){
    super();
  }
  eachGroup(group, i){
    return <Group key={i} students={group} />
  }
  render() {
    return (
      <div className='GroupList'>
        <h1>Groups</h1>
        { this.props.groups.map(this.eachGroup) }
      </div>
    );
  }
}

export default GroupList;
