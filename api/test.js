const express = require('express');

const isAuth = require('./middleware').isAuth;

const agendajs = require('../jobs/agenda');

/**
 * Inner router, where all api are defined
 */
const newRouter = express.Router();

newRouter.get('/test', isAuth, (req,res) =>{
  agendajs.schedule('in 30 seconds','send-welcome-email',{email:'a.pocorobba@betacom.it'},);
  res.end();
});

module.exports = newRouter;


