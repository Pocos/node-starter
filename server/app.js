require('dotenv').config();
require('./repository/DB');
const app = require('./server');

// Initialize DB
//db.initDb();

// Import express app. Todo add configuration for port and other things ...
app.listen(3000);




