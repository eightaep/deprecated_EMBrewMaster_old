var express = require('express');
var app = express();
var fs = require("fs");

var port = 2437;

app.get('/', function (req, res) {
   res.end("test 2");
})

var server = app.listen(port, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})