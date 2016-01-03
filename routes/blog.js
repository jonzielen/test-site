var s2a = require('../libs/stringToArray');
var bt = require('../libs/blogTags');
var express = require('express');
var router = express.Router();

var db = require('../app/db');

/* GET blog page. */
router.get('/', function(req, res, next) {
    res.render('blog-page', {
        title: 'Blog Page'
    });
});

/* GET blog post page. */
router.get('/:url', function(req, res, next) {
    var url = req.params.url,
        collection = db.get().collection('blogPosts');

    collection.findOne({"url":url}, function(err, post) {
        var tagsArray = s2a.tags(post.tags, ', ');

        res.render('blogPost-page', {
            meta: post.meta,
            title: post.title,
            date: post.date.toDateString(),
            tags: bt.blogify(tagsArray, '/blog/tag/'),
            body: post.body
        });
    });
});

// /* GET blog tags page. */
// router.get('/tags', function(req, res, next) {
//     res.render('blogTags-page', {
//         title: 'need to figure this out'
//     });
// });

// /* GET blog page. */
// router.get('/code-example', function(req, res, next) {
//     res.render('blog-page', {
//         title: 'need to figure this out'
//     });
// });

module.exports = router;
