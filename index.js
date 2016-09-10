const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const home    = require('./routes/home');

const app     = express();
const port    = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')));

app.use('/',home);

app.listen(port, () => {
  console.log('server listening on port ',port);
});