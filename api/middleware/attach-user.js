const attachUser = (req,res,next) => {
  console.log(req.url);
  next();
};

module.exports = attachUser;