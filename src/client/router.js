import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AppLayout from 'containers/AppLayout';

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" name="home" component={AppLayout} />
      </Switch>
    </BrowserRouter>
  );
}
