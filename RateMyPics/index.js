var express = require("express");
var appBoostrap = require("./appBoostrap.js");

var app = express();
var appBooter = new appBoostrap();
app.use(express.static("public"));


appBooter.generatePicsJSON(function(err){
    if(!err){
        app.listen(process.env.PORT, process.env.IP);    
    }else{
        console.log("error in appBoostrap", err);
    }
});


console.log("application is started on:" + process.env.IP + ":" + process.env.PORT);