var fs = require("fs");
var appBoostrap = function(bootStrapCompleted){
    this.generatePicsJSON = function(){
        fs.readdir("public/assets/pics", function(err, files){
            if(!err){
                fs.writeFile("public/assets/json/pics.json", JSON.stringify(files), function(errWrite){
                    bootStrapCompleted(errWrite);
                });
            }
        });
    };
};

exports = appBoostrap;