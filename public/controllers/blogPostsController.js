var siteApp = angular.module('siteApp', ['ngAnimate']);

siteApp.controller('BlogPostsCtrl', function($scope, $http) {
    $http.get('feeds/blog').success(function(data) {

        function splitTagsToArray(tags) {
            return tags.split(', ');
        };

        function getTags(obj) {
            obj.tags = splitTagsToArray(obj.tags)
        };

        data.map(function getTags(obj) {
            obj.tags = splitTagsToArray(obj.tags)
        });

        $scope.posts = data;
    });
});
