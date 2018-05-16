// Native
const path = require('path');

// Packages
const express = require('express');

// Ours
const routes = require('./routes/index');
const helpers = require('./helpers');

// create our Express app
const app = express();

// pass variables to all our requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);


// done! we export it so we can start the site in start.js
module.exports = app;
