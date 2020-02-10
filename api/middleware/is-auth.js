const isAuth = (req,res,next) => {
  console.log('middleware');
  console.log(req.url);
  console.log(req.cookies);
  next();
};
  
module.exports = isAuth;