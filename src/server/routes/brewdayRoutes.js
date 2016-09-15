var express = require('express');
var router = express.Router();

var Brewday = require('../models/brewday');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/EMBC';

var mongoose = require('mongoose');

router.post('/', function(req, res, next) {
    var brewday = new Brewday({
        date: req.body.date
    });
    brewday.save(function(err, result) {
        if(err) {
            console.log(err);
            return res.status(500).json({
                title: 'Data not saved',
                error: err
            });
        }

        console.log("Brewday created");
        console.log(result + "\n");
        res.status(201).json({
            data: result
        });
    });
});

router.get('/', function (req, res) {
    Brewday.find(function(err, brewdays) {
        if(err) {
            console.log(err);
            return res.status(500).json({
                title: 'Error fetching brewdays',
                error: err
            });
        }

        console.log(brewdays);
        res.status(200).json({
            data: brewdays
        })
    });
});

router.get('/:brewdayID', function (req, res) {
    var brewdayID = req.params.brewdayID;

    Brewday.findOne({_id : new mongoose.mongo.ObjectID(brewdayID)}, function(err, brewday) {
        if(err) {
            console.log(err);
            return res.status(500).json({
                title: 'Error fetching brewdays',
                error: err
            });
        }

        console.log(brewday);
        res.status(200).json({
            data: brewday
        })
    });
});

router.delete('/:brewdayID', function(req, res) {
    var brewdayID = req.params.brewdayID;

    Brewday.findOneAndRemove({_id : new mongoose.mongo.ObjectID(brewdayID)}, function (err,brewday){
        if(err) {
            console.log(err);
            return res.status(500).json({
                title: 'Delete failed',
                error: err
            });
        }

        console.log("delete " + brewdayID)
        res.status(200).json({
            data: brewdayID
        });
    });
});

router.get('/:brewdayID/brews', function (req, res) {
    var brewdayID = req.params.brewdayID;

/*res.status(200).body.json({
            data: { _id: "aaa", recipeID = "bbb", processID: "ccc" }//, { _id: "ddd", recipeID = "eee", processID: "fff" }]
        });
/*    
    Brewday.findOne({_id : new mongoose.mongo.ObjectID(brewdayID)}, function(err, brewday) {
        if(err) {
            console.log(err);
            return res.status(500).json({
                title: 'Error fetching brewdays',
                error: err
            });
        }

        console.log(brewday);
        res.status(200).json({
            data: [{ _id: "aaa", recipeID = "bbb", processID: "ccc" }, { _id: "ddd", recipeID = "eee", processID: "fff" }]
        })
    });*/
});

module.exports = router;