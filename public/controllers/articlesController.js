var siteApp = angular.module('siteApp', []);

siteApp.controller('ArticlesCtrl', function($scope, $http) {
    $http.get('feeds/article').success(function(data) {
        $scope.articles = data;
    });
});
