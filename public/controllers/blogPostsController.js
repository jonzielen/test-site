var siteApp = angular.module('siteApp', []);

siteApp.controller('BlogPostsCtrl', function($scope, $http) {
    $http.get('feeds/blog').success(function(data) {
        $scope.posts = data;
    });
});
