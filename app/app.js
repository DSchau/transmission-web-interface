angular.module('transmission', [
  'ngRoute',
  'headroom',
  'transmission.torrents',
  'transmission.common'
])
.config(function($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('httpInterceptor');
  $routeProvider.otherwise({
    redirectTo:'/torrents'
  });
});