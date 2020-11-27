//external resources
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');


//routers
const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const notesRouter = require('./notes/notes-router');
const triggerPointRouter = require('./triggerpoint/trigger-point-router');
const triggerPointUserRouter = require('./trigger-points-user/trigger-point-user-router');

// build app object
const app = express();

//morgan settings
const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

// routes
app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/notes', notesRouter);
app.use('/api/tp', triggerPointRouter);
app.use('/api/tpusers', triggerPointUserRouter);

// basic api endpoint
app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;