const bodyParser = require('body-parser');
const express = require('express');
let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 5000));

require('./analyze-data/final');


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})