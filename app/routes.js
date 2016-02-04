import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Contributions from './components/Contributions';
import Issues from './components/Issues';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/contributions' component={Contributions} />
    <Route path='/issues' component={Issues} />
  </Route>
);