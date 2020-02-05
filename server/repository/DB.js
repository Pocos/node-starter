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


module.exports = {
    executeFindOne: executeFindOne
}