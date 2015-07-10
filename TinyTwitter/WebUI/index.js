var express = require("express");
var request = require('request');

var apiUrl = "https://127.0.0.1/"
var app = express();

//web app
app.use(express.static(__dirname + "/app"));

//proxy for API
app.use('/api/*', function(req, res) {
  var url = apiUrl + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server stared");
});

