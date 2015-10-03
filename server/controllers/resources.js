var express = require('express');

var ResourcesController = express.Router();ResourcesController

var Resource = require('../models/resource');


ResourcesController.get('/', function(req, res){
  Resource.find({}, function(err, resources){
    res.json(resources);
  });
});

ResourcesController.post('/', function(req, res){
  var resource = new Resource(req.body);
  resource.save(function(err, resource){
    res.json(resource);
  });
});

ResourcesController.delete('/:id', function(req, res){
  var id = req.params.id
  Resource.findByIdAndRemove(id, function(){
      res.json({status: 202, message: "success"})
    });
  });


module.exports = ResourcesController;
