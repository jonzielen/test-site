var express = require('express');
var router = express.Router();

var db = require('../app/db');

/* GET blog listing. */
router.get('/blog', function(req, res, next) {
    var collection = db.get().collection('blogPosts');

    collection.find().toArray(function(err, post) {
        res.json(post);
    });
});

/* GET blog tags listing. */
router.get('/blog/tags/:url', function(req, res, next) {
    var collection = db.get().collection('blogPosts');
    // create an index for text search to work: db.blogPosts.createIndex({"tags":"text"})
    var query = {$text: {$search: req.params.url}};

    collection.find(query).toArray(function(err, post) {
        res.json(post);
    });
});

/* GET articles listing. */
router.get('/article', function(req, res, next) {
    var collection = db.get().collection('articles');

    collection.find().toArray(function(err, article) {
        res.json(article);
    });
});

/* GET articles tags listing. */
router.get('/articles/tags/:url', function(req, res, next) {
    var collection = db.get().collection('articles');
    // create an index for text search to work: db.articles.createIndex({"tags":"text"})
    var query = {$text: {$search: req.params.url}};

    collection.find(query).toArray(function(err, post) {
        res.json(post);
    });
});

module.exports = router;
