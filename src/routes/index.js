import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* Pages */
import Main from '../pages/main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
