(function(){
  var newsFeedApp = angular.module('newsFeedApp', []);
  
  newsFeedApp.controller('NewsController', ['$scope', '$http', function($scope, $http) {
    $scope.newsFeed = [];
    $http.get('newsFeed.json').success(function(news){
      $scope.newsFeed = news;
    });
  }]);
})();
