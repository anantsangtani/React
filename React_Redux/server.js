var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var data;
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));
app.get('/user', function(req, res) {
   res.send(data);
});
app.post('/user', function(req, res) {
    data=req.body;
res.send(data);
});
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});