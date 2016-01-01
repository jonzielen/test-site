var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/', function(req, res, next) {
  res.render('blog-page', {
      title: 'Blog Page'
  });
});

/* GET blog page. */
router.get('/code-example', function(req, res, next) {
  res.render('blog-page', {
      title: 'need to figure this out'
  });
});

module.exports = router;
