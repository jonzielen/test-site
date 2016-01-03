var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'COMING SOON!!' });
});

/* GET articles page. */
router.get('/articles', function(req, res, next) {
  res.render('articles-page', {
      title: 'Articles Page'
  });
});

/* GET articles tag page. */
router.get('/articles/tags/:url', function(req, res, next) {
  res.render('articlesTags-page', {
      title: 'Articles with the tag: '+req.params.url
  });
});



module.exports = router;
