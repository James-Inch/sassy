// Require mysql
var mysql = require("mysql");

// Set up connection 
var connection = mysql.createConnection({
    port: 3306, 
    host: "localhost",
    user: "root",
    password: "rrrr4444RRRR$$$$",
    database: "sassy"
});

// Conect to the database 
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;