import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../main/Main';
import Johari from '../johari/Johari';
import Sidebar from '../sidebar/Sidebar';

const routes = [
  { path: '/',
    exact: true,
    main: () => <Main />
  },
  { path: '/johari/:id',
    main: () => <Johari />
  },
]

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Sidebar />

          <div>
            { routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>

        </div>
    </Router>
    )
  }
}

export default App;
