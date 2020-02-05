const dbb=require('./DB');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
//register user
async function registerUser(body) {
    const hash = bcryptjs.hashSync(req.body.password);
    return new Promise((resolve, reject) => {
        dbb.collection('User').insertOne(({
            name: body.name,
            surname: body.surname,
            age: body.age,
            email: body.email,
            phone: body.telephoneNumber,
            password: hash
        })), (err) => {
            if (err) {
                reject(err);
            }
        }});
}


/**
 * authenticate user
 * @param {*} body 
 */
async function getUserByEmail(email){ 
    const query = { email: email };
    const user = await dbb.executeFindOne('User', query);
    return user;
}

module.exports = {
    registerUser: registerUser,
    getUserByEmail:getUserByEmail
}