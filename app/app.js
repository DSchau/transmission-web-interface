angular.module('transmission', [
  'ngRoute',
  'transmission.torrents',
  'transmission.common'
])
.config(function($routeProvider) {
    $routeProvider.otherwise({
      redirectTo:'/torrents'
    });
});