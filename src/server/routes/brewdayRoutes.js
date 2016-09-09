var express = require('express');
var router = express.Router();

var BrewDay = require('../models/brewDay');

router.post('/', function(req, res, next) {
    var brewDay = new BrewDay({
        date: req.body.date
    });
    brewDay.save(function(err, result) {
        if(err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }

        res.status(201).json({
            message: 'Brewday created',
            obj: result
        });
    });
});

module.exports = router;