const MongoClient = require('mongodb').MongoClient;
const Dbserver = 'mongodb://localhost:27017/';

let dbConnection;
// IIFE initialization
(function init() {
  MongoClient.connect(
    Dbserver,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err, db) => {
      dbConnection = db.db('ShareMatch');
      if (err) throw err;
    }
  );
})();

async function executeFindOne(collection, query) {
  const result = await dbConnection.collection(collection).findOne(query);
  return result;
}
function insertOne(collection, body) {
  return new Promise((resolve, reject) => {
    resolve(dbConnection.collection(collection).insertOne(body)),
    err => {
      if (err) {
        reject(err);
      }
    };
  });
}

module.exports = {
  insertOne: insertOne,
  executeFindOne: executeFindOne
};
