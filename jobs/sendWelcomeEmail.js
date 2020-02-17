function sendWelcomeEmail(job, done){
  const { email } = job.attrs.data;
    	//const mailerServiceInstance = new MailerService();
    	//await mailerServiceInstance.SendWelcomeEmail(email);
  console.log('Executing job to email:'+email);
    	done();
}




module.exports = sendWelcomeEmail;
