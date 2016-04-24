import React from 'react';
import Router from 'react-router';

const routes = require('./routes');

Router.run(routes, Router.HistoryLocation, (Handler) => {
    const app = React.createElement(Handler);
    React.render(app, document.getElementById('content'));
  }
);
