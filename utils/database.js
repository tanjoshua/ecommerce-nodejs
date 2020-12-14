/* connection file for mongodb's native driver

const MongoClient = require("mongodb").MongoClient;
const uri =
  "<MONGODB URI HERE>";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

// function to connect
const mongoConnect = (cb) => {
  client.connect((err) => {
    _db = client.db();
    cb();
    // client.close();
  });
};

// function to get db
const getDB = () => {
  if (_db) return _db;
};

//export connect funciton
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
*/
