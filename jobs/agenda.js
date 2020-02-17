const agendaLibrary= require('agenda');
const jobs = require('./index');
const mongoConnection = 'localhost:27017/agenda';
const agendajs = new agendaLibrary();

agendajs
  .database(mongoConnection, 'my-agendajs-jobs')
  .processEvery('5 seconds')
  .maxConcurrency(20);

jobs(agendajs);

module.exports = agendajs;
