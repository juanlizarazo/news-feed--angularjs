(function(){
  var newsFeedApp = angular.module('newsFeedApp', []);
  
  newsFeedApp.controller('NewsController', function() {
    this.newsFeed = newsFeed;
  });
  
  var newsFeed = {
    "nextId": "2",
    "items": [
        {
            "title": "Facebook's software architecture",
            "url": "http://muratbuffalo.blogspot.com/2014/10/facebooks-software-architecture.html?spref=tw",
            "id": 8480478,
            "commentCount": 6,
            "points": 121,
            "postedAgo": "4 hours ago",
            "postedBy": "colbyaley"
        },
        {
            "title": "SmileBASIC for Nintendo 3DS",
            "url": "http://smilebasic.com/en/",
            "id": 8480694,
            "commentCount": 6,
            "points": 27,
            "postedAgo": "2 hours ago",
            "postedBy": "niconii"
        }
    ]
  }
})();