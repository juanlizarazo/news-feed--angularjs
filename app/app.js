(function(){
  var newsFeedApp = angular.module('newsFeedApp', []);
  
  newsFeedApp.controller('NewsController', ['$http', function($http) {
    var newsController = this;
    newsController.newsFeed = [];
    
    $http.get('newsFeed.json').success(function(news){
      newsController.newsFeed = news;
    });
  }]);
})();
