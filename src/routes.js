import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Product from './pages/Product';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Product} />
    </Switch>
  );
}

export default Routes;
