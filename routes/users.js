import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  const { email, title } = req.query;

  console.log(`session: ${req.session}`);

  res.render('login', { email, title });
});

router.post('/', function (req, res, next) {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    req.session.user = 'admin';
    res.render('login-success', {
      session: req.session
    });
    return;
  }

  res.redirect('/users');
});

export default router;
