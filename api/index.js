const express = require('express');
const router = express.Router();

const authApi = require('./auth.js');
const testApi = require('./test.js');

// Initialize all routes
router.use(authApi);
router.use(testApi);
module.exports = router;