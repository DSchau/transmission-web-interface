window.deferredBootstrapper.bootstrap({
  element: document.body,
  module: 'transmission',
  resolve: {
    API_KEY: ['$http', '$q', function ($http, $q) {
      var defer = $q.defer();
      $http.post('/transmission/rpc').error(function(data, status, headers) {
        var headerObj = headers(),
          token = 'X-Transmission-Session-Id',
          key = headerObj[token.toLowerCase()];
        defer.resolve(key);
      });
      return defer.promise;
    }]
  }
});

angular.module('transmission', [
  'ngRoute',
  'headroom',
  'transmission.torrents',
  'transmission.common'
])
.config(function($routeProvider, $httpProvider, API_KEY) {
  $httpProvider.defaults.headers.common['X-Transmission-Session-Id'] = API_KEY;
  $httpProvider.interceptors.push('httpInterceptor');
  $routeProvider.otherwise({
    redirectTo:'/torrents'
  });
});