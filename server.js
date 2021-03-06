// Application Tools

var express      =      require('express'),
    bodyParser   =      require('body-parser'),
    mongoose     =      require('mongoose'),
    morgan       =      require('morgan');



// Database Connection
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/resource-data');

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// Routing
app.get('/', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

var ResourcesController = require('./server/controllers/resources')
app.use('/api/resources', ResourcesController);

var UsersController = require('./server/controllers/users');
app.use('/api/users', UsersController);

var port = process.env.PORT || '8080';
// Start App
app.listen(port, function(){
  console.log('...listening');
});
