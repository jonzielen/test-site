var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'COMING SOON!!' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact-page', { title: 'Contact Jon!' });
});

/* GET resume page. */
router.get('/resume', function(req, res, next) {
  res.render('resume-page', { title: 'Jon\'s Resume!' });
});

module.exports = router;
