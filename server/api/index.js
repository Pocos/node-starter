const express = require('express');
const router = express.Router();

const auth = require('./auth.js');
// Initialize all routes
auth.init(router);
module.exports = router;