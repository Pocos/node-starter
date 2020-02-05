require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const Dbserver = "mongodb://localhost:27017/";

let dbb;
// IIFE initialization
(function init () {
    MongoClient.connect(Dbserver, { useUnifiedTopology: true, useNewUrlParser: true }, (err, db) => {
        dbb = db.db('ShareMatch');
        if (err) throw err;
        console.log("Database Connected Successfully!!!!!!!");
        });
})();

async function executeFindOne(collection, query){
    const result = await dbb.collection(collection).findOne(query)
    return result;
}
 function insertOne(collection,body){
    return new Promise((resolve, reject) => {
        resolve(dbb.collection(collection).insertOne((body))), (err) => {
            if (err) {
                reject(err);
            }
        }
    });
}

module.exports = {
    insertOne:insertOne,
    executeFindOne: executeFindOne
}