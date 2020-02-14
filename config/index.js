let config = {
  port: 3000,
  apiPrefix: '/api'
};

if(process.env.NODE_ENV !== 'production'){
  console.log('production');
  config = require('../config-local.json');
}else{
  config = require('../config-prod.json');
}


module.exports = config;
