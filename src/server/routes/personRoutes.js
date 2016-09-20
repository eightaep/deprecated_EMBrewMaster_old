var express = require('express');
var router = express.Router();

var Person = require('../models/person');

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/EMBC';

var mongoose = require('mongoose');

router.post('/', function(req, res, next) {
    var person = new Person({
        nickname: req.body.nickname,
        adress: req.body.adress,
        brewdays: []
    });
    person.save(function(err, result) {
        if(err) {
            console.log(err);
            return res.status(500).json({
                title: 'Data not saved',
                error: err
            });
        }

        console.log("Person created");
        console.log(result + "\n");
        res.status(201).json({
            data: result
        });
    });
});

router.get('/', function (req, res) {
    Person.find(function(err, persons) {
        if(err) {
            console.log(err);
            return res.status(500).json({
                title: 'Error fetching persons',
                error: err
            });
        }

        console.log("Persons found: \n" + persons + "\n");
        res.status(200).json({
            data: persons
        })
    });
});

router.get('/:personID', function (req, res) {
    var personID = req.params.personID;

    Person.findOne({_id : new mongoose.mongo.ObjectID(personID)}, function(err, person) {
        if(err) {
            console.log(err);
            return res.status(500).json({
                title: 'Error fetching persons',
                error: err
            });
        }

        console.log(person);
        res.status(200).json({
            data: person
        })
    });
});

router.delete('/:personID', function(req, res) {
    var personID = req.params.personID;

    Brewday.findOneAndRemove({_id : new mongoose.mongo.ObjectID(personID)}, function (err,person){
        if(err) {
            console.log(err);
            return res.status(500).json({
                title: 'Delete failed',
                error: err
            });
        }

        console.log("deleted: " + personID + "\n")
        res.status(200).json({
            data: personID
        });
    });
});

module.exports = router;