// Dependencies - import connection from config/conn...
var connection = require("../config/connection.js");

//Routes 
module.exports = function(app) {
    // Get all messages 
    app.get("/api/all", function(req,res) {
        var dbQuery = "SELECT * FROM messages";

        connection.query(dbQuery, function(err, result) {
          if (err) throw err;
          res.json(result);
        });
    });

    // Add message 
    
};




