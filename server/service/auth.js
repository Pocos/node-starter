const authRepository = require('../repository/auth');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function authenticateUser(body){
    let token = null;
    const user = await authRepository.getUserByEmail(body.email);
    
    if(bcryptjs.compareSync(body.password, user.password)){
        // Password match
        token = generateToken(user);
    }
    return token;
}

//generate token with jwt
function generateToken(user) {
    return jwt.sign(user, process.env.SECRET_TOKEN, { expiresIn: '3h' });
}

module.exports = {
    authenticateUser : authenticateUser
}