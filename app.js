var app = angular.module('postit', []);

angular.module('postit', ['ui.router'])

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);

app.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.posts = posts.posts;
    // [
    //   {title: 'post 1', upvotes: 5},
    //   {title: 'post 2', upvotes: 4},
    //   {title: 'post 3', upvotes: 6},
    //   {title: 'post 4', upvotes: 2},
    //   {title: 'post 5', upvotes: 9}
    // ];

    $scope.addPost = function(){
      if(!$scope.title || $scope.title==='') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }]);
