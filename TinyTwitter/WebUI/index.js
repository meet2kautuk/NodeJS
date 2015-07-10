var express = require("express");
var request = require("request");

var port = 9980;
var app = express();

//web app
app.use(express.static(__dirname + "/app"));

app.listen(port, function(){
    console.log("server stared");
});

