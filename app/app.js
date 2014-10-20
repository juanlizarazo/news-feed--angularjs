(function(){
  var newsFeedApp = angular.module('newsFeedApp', []);
  
  newsFeedApp.controller('NewsController', function() {
    this.newsFeed = [];
  });
})();
