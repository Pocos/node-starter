const express = require('express');
const cookieparser = require('cookie-parser');
const cors = require("cors");
const baerertoken = require('express-bearer-token');
//var app = express();
const body = require('body-parser');
const app = express();
const routes = require('./api');

// Add all common middlewares
app.use(express.json());
app.use(cors({credentials: true}));
app.use(cookieparser());
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(baerertoken());
app.use(routes);

module.exports = app;