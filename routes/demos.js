var express = require('express');
var router = express.Router();

/* GET demo home page. */
router.get('/', function(req, res, next) {
  res.render('demo-page', { title: 'Demo Page' });
});

module.exports = router;
