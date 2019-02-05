var express = require("express");
var bodyParser = require("body-parser");
var path=require("path");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/", function(req,res) {
    res.send(path.join(__dirname, "../public/views/index.html"));
})

require("./app/routes/api-routes.js")(app);
// require("./app/routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});