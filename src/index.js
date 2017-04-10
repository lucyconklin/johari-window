import React from 'react';
import ReactDOM from 'react-dom';
import browserHistory from 'react-router';
import App from './app/App';
import './shared.css';
import makeMainRoutes from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
  <App routes={routes} />,
    document.getElementById('root')
);
