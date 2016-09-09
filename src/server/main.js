var express = require('express');
var app = express();
var fs = require('fs');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/EMBC';

var mongoose = require('mongoose');

var port = 2437;

mongoose.connect('localhost:27017/EMBC_test');

app.get('/', function (req, res) {
   res.end("test 2");
})

app.get('/brewdays', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);

        db.collection('brewDays').find().toArray(function(err, brewDaysResults) {
            assert.equal(null, err);
            res.end(JSON.stringify(brewDaysResults));    
        });

        db.close();
    });
})

var server = app.listen(port, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})