var app = angular.module('myApp', ['ngRoute']);

app.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}]);

// configure routes
app.config(function($routeProvider,$locationProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "../templates/headlines.html",
    controller: 'headlineController'
  })
  .when("/news/:id", {
    templateUrl : "../templates/news.html",
    controller: 'newsController'
  })
  .otherwise({
    template : "templates/headlines.html"
  });

});

app.controller('newsController', function ($scope, $routeParams,$anchorScroll) {

  $(function () {
    var $ele = $('#news-'+ $routeParams.id).offset();
    var topPos = $ele.top ? $ele.top : 50;
    $('html, body').animate({ scrollTop: topPos }, 1000);
    console.log(topPos);
  });

});

app.controller('headlineController', function ($scope,$rootScope) {
  $rootScope.news = [{
    id: 1,
      title: 'Poll: Voters Tax Bill Aimed at HeAimed at Helping Trump',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },{
      id: 2,
      title: 'Poll: Tax Bill Aimed at Het Helping Trump',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },{
      id: 3,
      title: 'Poll: Voters Tax Bill Aimed at Herump',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },{
      id: 4,
      title: 'Poll: Voters Say Tax BilTax Bill Aimed at He Trump',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },{
      id: 5,
      title: 'PollTax Bill Aimed at He Bill Aimed at Helping Trump',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },{
      id: 6,
      title: 'Tax Bill Aimed at He Tax Bill Aimed at Helping Trump',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },{
      id: 7,
      title: 'Poll: Voters Say Poll: Voters Say Tax',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    },{
      id: 8,
      title: 'Poll: Voters Say Tax Bill Aimed at Helping Trump',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit'
  }];
});