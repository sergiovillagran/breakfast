var dbCon      = require('./config/db.js');
var express    = require('express');
var bodyParser = require('body-parser');
var prodRouter = require('./routes/MRproduct.js');
var server     = express();
var port       = 3000;

dbCon.connect("mongodb://localhost/bfastdb");

server.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    next();
});

//server.use(bodyParser.urlencoded({extended: false}));
//server.use(bodyParser.json());

server.use('/api', prodRouter);


server.listen(port, function (){
    console.log("server listening on port" + port);
})