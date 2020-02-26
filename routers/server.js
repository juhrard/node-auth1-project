const express = require('express');
const session = require("express-session");
const KnexStore = require("connect-session-knex")(session);

const apiRouter = require('./api-router.js');
const configureMiddleware = require('../middleware/configure-middleware');
const knex = require("../data/dbConfig.js");

const server = express();

const sessionConfig = {
  name: "Cookie 1",
  secret: "This is a secret!",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false, 
    httpOnly: true, 
  },

  store: new KnexStore({
    knex,
    tablename: "sessions",
    createtable: true,
    sidfieldname: "sid",
    clearInterval: 1000 * 60 * 15,
  }),
};

configureMiddleware(server);
server.use(session(sessionConfig));

server.use('/api', apiRouter);

module.exports = server;
