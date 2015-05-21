import React from 'react';
import {Route, DefaultRoute} from 'react-router';

export default (
  <Route name='app' path='/' handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/home')} />
  </Route>
);
