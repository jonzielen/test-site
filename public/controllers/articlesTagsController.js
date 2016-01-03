var siteApp = angular.module('siteApp', ['ngAnimate']);

siteApp.controller('ArticlesTagsCtrl', function($scope, $http) {
    var searchUrl = '/feeds/articles/tags/'+window.location.pathname.split('/').reverse()[0];

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
