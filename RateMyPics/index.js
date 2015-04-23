var express = require("express");
var fs = require("fs");

var app = express();

app.use(express.static("public"));

var appBoostrap = function(bootStrapCompleted){
    fs.readdir("public/assets/pics", function(err, files){
        console.log("reading pics...");
        if(!err){
            console.log("writing pics.json...");
            fs.writeFile("public/assets/json/pics.json", JSON.stringify(files), function(errWrite){
                bootStrapCompleted(errWrite);
            });
        }
    });
};

appBoostrap(function(err){
    if(!err){
        app.listen(process.env.PORT, process.env.IP);    
        console.log("application is started on:" + process.env.IP + ":" + process.env.PORT);
    }else{
        console.log("error in appBoostrap", err);
    }
});
