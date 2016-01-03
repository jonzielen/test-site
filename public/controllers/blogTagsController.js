var siteApp = angular.module('siteApp', ['ngAnimate']);

siteApp.controller('BlogTagsCtrl', function($scope, $http) {
    var searchUrl = '/feeds/blog/tags/'+window.location.pathname.split('/').reverse()[0];

    $http.get(searchUrl).success(function(data) {
        function splitTagsToArray(tags) {
            return tags.split(', ');
        };

        data.forEach(function(obj) {
            obj.tags = splitTagsToArray(obj.tags);
        });

        $scope.posts = data;
    });
});
