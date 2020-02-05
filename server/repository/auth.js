const dbb=require('./DB');
//register user
async function insertUser(body) {
    const insertOne=await dbb.insertOne('User',body);
    return insertOne;
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
    getUserByEmail:getUserByEmail,
    insertUser:insertUser
}