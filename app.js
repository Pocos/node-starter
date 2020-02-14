const app = require('./server');
const config = require('./config');

// Import express app. Todo add configuration for port and other things ...
app.listen(config.port, ()=>{
  console.log(`listening on port ${config.port}...`);
});




