import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../main/Main';
import Johari from '../johari/Johari';
import Sidebar from '../sidebar/Sidebar';
import NoMatch from '../no-match/NoMatch';

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
                key='2'
                exact={true}
                path='/'
                render={ () => <Main /> }
              />
              <Route
                key='3'
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
