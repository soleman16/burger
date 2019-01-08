// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
require("dotenv").config();
var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DATABASE
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;