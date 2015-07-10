var express = require("express");
var app = express();
var port = 9560;
var ip = "127.0.0.1";

app.get("/api/hello", function(req, res){
    res.end("hello");
});


app.listen(port, ip, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("API server started");    
    }
});