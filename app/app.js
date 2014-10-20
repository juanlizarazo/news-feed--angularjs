(function(){
  var newsFeedApp = angular.module('newsFeedApp', []);
  
  newsFeedApp.controller('NewsController', ['$http', function($http) {
    this.newsFeed = [];
  }]);
})();
