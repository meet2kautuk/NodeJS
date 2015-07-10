var express = require("express");
var app = express();
var port = 9970;


//CROSS ORGIN HEADERS
app.all("*", function(req, res, next){
	res.set("Access-Control-Allow-Origin", "*");
	res.set("Access-Control-Allow-Methods", "*");
	next();
});

app.get("/api/hello", function(req, res){
    res.end("hello");
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("API server started");    
    }
});