import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css"

import Main from '../main/Main';
import Admin from '../admin/Admin';
import Cohort from '../cohort/Cohort';
import Johari from '../johari/Johari';
import Sidebar from '../sidebar/Sidebar';
import NoMatch from '../no-match/NoMatch';
import MyWindow from '../my-window/MyWindow';

class App extends Component {
  render() {
    return (
      <div className='App'>

        <Router>
          <div className='Router'>
            <Sidebar />
            <Switch>
              <Route
                key='1'
                path='/johari/:id'
                render={ ({match}) => <Johari evaluateeID={match.params.id} /> }
              />
              <Route
              key='3'
              path='/mywindow'
              render={ () => <MyWindow /> }
              />
              <Route
                key='2'
                exact={true}
                path='/'
                render={ () => <Main /> }
              />
              <Route
                key='5'
                exact={true}
                path='/admin'
                render={ () => <Admin /> }
              />
              <Route
                key='6'
                path='/admin/cohort/:id'
                render={ ({match}) => <Cohort cohortID={match.params.id} /> }
              />
              <Route
                key='4'
                render={ () => <NoMatch /> }
              />
            </ Switch >
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
