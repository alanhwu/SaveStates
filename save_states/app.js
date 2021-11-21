var createError = require('http-errors');
var express = require('express');
var path = require('path');
const Datastore = require('nedb');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

/* // Setup server to use localhost port 3000
const port = 3000;
app.listen(port, () => console.log('listening at ' + port));
app.use(express.json({limit: '1mb'})); */

// Setup view engine to use pug and look in views/ directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const database = new Datastore('database.db');

// Loads past data into memory, or creates a database if it does not exist.
database.loadDatabase();
app.get('/api', (request, response) => {
console.log("hello world");
    database.find({},(err, data) => {
    if (err) {
        response.end();
        return;
    }
    response.json(data);
  });
});

app.post('/api', (request, response) => {
    console.log('I got a request!');
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);    
    response.json(data);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
