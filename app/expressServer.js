var express    = require('express');
var server     = express();
var bodyParser = require('body-parser');
var prodRouter = require('./routes/MRproduct.js');
var port       = 3000;
var dbCon      = require('./config/db.js');

dbCon.connect("mongodb://localhost/bfastdb");

server.use('/api', prodRouter);
server.listen(port, function (){
    console.log("server listening on port" + port);
})