var path = require("path");

//TODO: write html routes and require routes on server 
module.exports = function(app) { 
    // load Landing page 
    app.get("/", function(req, res) {
        res.send(path.join(__dirname, "../public/views/index.html"));
    });
    // Load message page
    app.get("/messages", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/messages.html"));
    }); 
};