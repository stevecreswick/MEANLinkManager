// Application Tools

var express      =      require('express'),
    bodyParser   =      require('body-parser'),
    mongoose     =      require('mongoose');




// Database Connection
// mongoose.connect('mongodb://localhost/linkmanagerdata');

// var Resource = require('./server/models/resource.js');

var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});



app.listen('8080', function(){
  console.log('...listening');
})
