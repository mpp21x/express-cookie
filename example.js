import express from 'express';

import session from 'express-session';

var app = express();

// Populates req.session
app.use(
  session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'keyboard cat',
  }),
);

app.get('/', function (req, res) {
  var body = '';
  if (req.session.views) {
    ++req.session.views;
  } else {
    req.session.views = 1;
    body += '<p>First time visiting? view this page in several browsers :)</p>';
  }
  res.send(
    body + '<p>viewed <strong>' + req.session.views + '</strong> times.</p>',
  );
});

/* istanbul ignore next */
app.listen(3000);
