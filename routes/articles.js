var express = require('express');
var router = express.Router();

/* GET articles page. */
router.get('/', function(req, res, next) {
  res.render('articles-page', {
      title: 'Articles Page'
  });
});

/* GET articles tag page. */
router.get('/tags/:url', function(req, res, next) {
  res.render('articlesTags-page', {
      title: 'Articles with the tag: '+req.params.url
  });
});

module.exports = router;
