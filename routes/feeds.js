var express = require('express');
var router = express.Router();

var db = require('../app/db');

/* GET feeds listing. */
router.get('/blog', function(req, res, next) {
    var collection = db.get().collection('blogPosts');

    collection.find().toArray(function(err, post) {
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

module.exports = router;
