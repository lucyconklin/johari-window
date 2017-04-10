import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

class Admin extends Component {
  constructor(){
    super();
    this.state = {cohorts: []};
  }

  componentDidMount(){
    this.retrieveCohorts();
  }

  retrieveCohorts(){
    var that = this;
    fetch('https://johariwindowapi.herokuapp.com/api/v1/cohorts')
      .then(result => result.json())
      .then(data => {
        that.setState({ cohorts: data })
        return true
    })
  }

  eachCohort(cohort, i){
    return <Link key={i} to={'/admin/cohort/' + cohort.id }>{cohort.name}</Link>
  }
  render() {
    return (
      <div className='Admin'>
        <h1>Select a cohort to create groups.</h1>
        <div className='cohort-list'>
          { this.state.cohorts.map(this.eachCohort) }
        </div>
      </div>
    );
  }
}

export default Admin;
