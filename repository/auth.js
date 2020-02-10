const connection = require('./connection');
//register user
async function insertUser(body) {
  const insertOne = await connection.insertOne('User', body);
  return insertOne;
}


/**
 * authenticate user
 * @param {*} email 
 */
async function getUserByEmail(email) {
  const query = { email: email };
  const user = await connection.executeFindOne('User', query);
  return user;
}

module.exports = {
  getUserByEmail: getUserByEmail,
  insertUser: insertUser
};