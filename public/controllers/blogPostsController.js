var siteApp = angular.module('siteApp', ['ngAnimate']);

siteApp.controller('BlogPostsCtrl', function($scope, $http) {
    $http.get('feeds/blog').success(function(data) {

        function splitTagsToArray(tags) {
            return tags.split(', ');
        };

        data.forEach(function(obj) {
            obj.tags = splitTagsToArray(obj.tags);
        });

        $scope.posts = data;
    });
});
