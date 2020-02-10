const authRepository = require('../repository/auth');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HMAC_KEY = '0NVASTRKC5M6BP8ZQI52';
/**
 * Check if user exists
 * @param {*} body 
 */
async function authenticateUser(body) {
  let token = null;
  const user = await authRepository.getUserByEmail(body.email);

  if (bcryptjs.compareSync(body.password, user.password)) {
    // Password match
    token = generateToken(user);
  }
  return token;
}

/**
 * Register user
 * @param {*} body 
 */
async function registerUser(body) {
  body.password = bcryptjs.hashSync(body.password);
  const insert = await authRepository.insertUser(body);
  return insert;
}

/**
 * Generate jwt token
 * @param {*} user 
 */
function generateToken(user) {
  return jwt.sign(user, HMAC_KEY, { expiresIn: '3h' });
}

module.exports = {
  authenticateUser: authenticateUser,
  registerUser: registerUser
};