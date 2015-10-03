var mongoose = require('mongoose');



var ResourceSchema = new mongoose.Schema({
  title: {type: String},
  description: {type: String},
  link: {type: String},
  upVotes: {type: Number},
  downVotes: {type: Number},
  shared: {type: Boolean},
  tags: {type: String}
});

var Resource = mongoose.model('Resource', ResourceSchema);

module.exports = Resource;
