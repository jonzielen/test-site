var siteApp = angular.module('siteApp', ['ngAnimate']);

siteApp.controller('ArticlesCtrl', function($scope, $http) {
    $http.get('feeds/article').success(function(data) {
        $scope.articles = data;
    });
});
