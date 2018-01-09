// Groups API routes

var express = require('express');
var router = express.Router();
var Groups = require('../models/Groups');

router.get('/', function(req, res, next) {
  
    Groups.getAllGroups(function(err, rows) {
        if(err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

router.post('/', function(req, res, next) {
 
    Groups.addGroup(req.body.name, function(err,count) {
        if(err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });

});

router.delete('/:id', function(req, res, next) {
 
    Groups.deleteGroup(req.params.id, function(err, count) {   
        if(err) {
            res.json(err);
        } else {
            res.json(count);
        }   
    });

});

module.exports = router;