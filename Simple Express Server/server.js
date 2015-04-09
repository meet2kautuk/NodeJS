var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Welcome to Express JS");
});

app.get("/api/reload", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT);

console.log("strted server at: " + process.env.PORT);