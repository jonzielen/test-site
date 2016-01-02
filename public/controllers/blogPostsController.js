var siteApp = angular.module('siteApp', ['ngAnimate']);

siteApp.controller('BlogPostsCtrl', function($scope, $http) {
    $http.get('feeds/blog').success(function(data) {
        $scope.posts = data;
    });
});
