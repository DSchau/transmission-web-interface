angular.module('transmission', [
  'ngRoute',
  'headroom',
  'transmission.torrents',
  'transmission.common'
])
.config(function($routeProvider) {
    $routeProvider.otherwise({
      redirectTo:'/torrents'
    });
});