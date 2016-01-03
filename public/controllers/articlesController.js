var siteApp = angular.module('siteApp', ['ngAnimate']);

siteApp.controller('ArticlesCtrl', function($scope, $http) {
    $http.get('feeds/article').success(function(data) {

        function splitTagsToArray(tags) {
            return tags.split(', ');
        };

        data.forEach(function(obj) {
            obj.tags = splitTagsToArray(obj.tags);
        });
        
        $scope.articles = data;
    });
});
