import React, { Component } from 'react';
import './GroupList.css';
import Group from '../group/Group';

class GroupList extends Component {
  constructor(){
    super();
    this.state = {groups: [[{name: "Drew", id: 4}, {name: "Kyle", id: 1}, {name: "Annie", id: 3}, {name: "Lucy", id: 2}], [{name: "Annie", id: 3}, {name: "Lucy", id: 2}]]};
  }
  eachGroup(group, i){
    return <Group key={i} students={group} />
  }
  render() {
    return (
      <div className='GroupList'>
        <h1>Groups</h1>
        { this.state.groups.map(this.eachGroup) }
      </div>
    );
  }
}

export default GroupList;
