import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dark from './pages/dark-theme/Dark';
import Background from './pages/background-words/Background';
import HiddenMenu from './pages/hidden-menu/HiddenMenu';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/dark-theme'>
          <Dark />
        </Route>
        <Route path='/background-words'>
          <Background />
        </Route>
        <Route path='/hidden-menu'>
          <HiddenMenu />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
