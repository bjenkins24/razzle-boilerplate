import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Loadable from './Loadable';

import './App.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/sup" component={Loadable} />
  </Switch>
);

export default App;
