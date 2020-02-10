const express = require('express');

const isAuth = require('./middleware').isAuth;

/**
 * Inner router, where all api are defined
 */
const newRouter = express.Router();

newRouter.get('/test', isAuth, (req,res) =>{
  res.end();
});

module.exports = newRouter;


