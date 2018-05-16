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

// done! we export it so we can start the site in start.js
module.exports = app;
