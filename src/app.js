var routes     = require('./routes');

var express = require('express');
var app     = express();


var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,      Accept");
  next();
};

app.use(allowCrossDomain);
app.use(app.router);

app.listen(process.env.PORT || 4730);
app.get('/v0/station/:station', routes.station  );
app.get('/v0/stations/:lat/:lon',         routes.stations );
app.get('/v0/last/:limit',      routes.last );

process.on('uncaughtException', function (error) {
  console.log(error.stack);
});
