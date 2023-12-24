import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const session = JSON.stringify(req.session);
  res.render('index', {
    title: `Express`,
    cookies: JSON.stringify(req.cookies),
    session
  });
});

export default router;
