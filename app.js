import createError from 'http-errors';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import session from 'express-session';

import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import { ulid } from 'ulid';

var app = express();

// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'hbs');

app.use(
  session({
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    secret: 'QULXfZ3I2qd+MJas',
  }),
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
