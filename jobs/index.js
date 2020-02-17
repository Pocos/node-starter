const mailHandler = require('./sendWelcomeEmail');

const init_agenda = (agendajs) => {
  agendajs.define('send-welcome-email', 
    { priority: 'high', concurrency: 10 },
    mailHandler, // reference to the handler, but not executing it! 
  );

  console.log('agenda started');
  agendajs.start();
};

module.exports = init_agenda;
