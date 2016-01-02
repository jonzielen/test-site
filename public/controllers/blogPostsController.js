var siteApp = angular.module('siteApp', ['ngAnimate']);

siteApp.controller('BlogPostsCtrl', function($scope, $http) {
    $http.get('feeds/blog').success(function(data) {

        function tagsArray(tags) {
            return tags.split(', ');
        };

        data.map(function(obj) {
            obj.tags = tagsArray(obj.tags)
        });

        $scope.posts = data;

        //console.log(data);
    });
});
