// Application Tools

var express      =      require('express'),
    bodyParser   =      require('body-parser'),
    mongoose     =      require('mongoose');



// Database Connection
mongoose.connect('mongodb://localhost/resource-data');


var app = express();

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());



// Routing
app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

var ResourcesController = require('./server/controllers/resources')
app.use('/api/resources', ResourcesController);


// Start App
app.listen('8080', function(){
  console.log('...listening');
});
