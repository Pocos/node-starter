const express = require('express');
const cookieparser = require('cookie-parser');
const cors = require('cors');
//var app = express();
const body = require('body-parser');
const app = express();
const routes = require('./api');

const whiteListedOrigins = ['http://localhost:8080'];

// Add all common middlewares
app.use(express.json());

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors({
  origin: (origin, callback) => {
    if (origin && whiteListedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(origin + ': not allowed'));
    }
  },
  credentials: true,
  allowedHeaders: ['X-XSRF-Token', 'Content-Type'],
}));

app.use(cookieparser());
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(routes);

module.exports = app;