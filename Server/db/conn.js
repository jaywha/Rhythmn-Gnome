const { MongoClient } = require("mongodb");

const Db = process.env.ATLAS_URI;
if (Db === undefined) { 
  throw new Error("My ATLAS_URI is undefined");
}

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
var _dbName = process.env.DB_NAME;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        _db = db.db(_dbName);
        console.log("Successfully connected to MongoDB."); 
      }

      return callback(err);
    });
  },
 
  getDb: function () {
    return _db;
  },
};