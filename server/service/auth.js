const authRepository = require('../repository/auth');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
//authenticate user in login with compare pwd and token 
async function authenticateUser(body){
    let token = null;
    const user = await authRepository.getUserByEmail(body.email);
    
    if(bcryptjs.compareSync(body.password, user.password)){
        // Password match
        token = generateToken(user);
    }
    return token;
}
//register service 
async function registerUser(body) {
    body.password = bcryptjs.hashSync(body.password);
    const insert= await authRepository.insertUser(body);
    return insert;
}

//generate token with jwt
function generateToken(user) {
    return jwt.sign(user, process.env.SECRET_TOKEN, { expiresIn: '3h' });
}

module.exports = {
    authenticateUser : authenticateUser,
    registerUser:registerUser
}