const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded( {extended: false} ));

app.set('view engine', 'pug');

const routes = require('./routes');


app.use(routes);
app.use('/static', express.static('public'));
app.use('/static', express.static('images'))

app.use((req, res, next) => {
  const err = new Error(`Page Not Found`);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});
app.listen(3000, () =>{
  console.log(`This project is running on local host: ${3000} Boi!`);
});
