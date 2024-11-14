const { JsonDB, Config } = require('node-json-db');
var db = new JsonDB(new Config("database", true, false, '/')) // this object will act as a pseudo database
module.exports = db