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

        res.status(201).json({
            message: 'Brewday created',
            obj: result
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
    });
});

module.exports = router;