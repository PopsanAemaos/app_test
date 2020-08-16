const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./router/index'));
const port = 4000;

app.listen(port, () => {
    console.log('http://localhost:' + port)
    console.log('Start server at port ' + port)
  })
  
module.exports = app
  