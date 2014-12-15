window.deferredBootstrapper.bootstrap({
  element: document.body,
  module: 'transmission',
  injectorModules: ['ngCookies'],
  resolve: {
    SESSION_ID: ['$http', '$q', '$cookieStore', function ($http, $q, $cookieStore) {
      var defer = $q.defer();

      var token = 'X-Transmission-Session-Id',
        sessionId = $cookieStore.get(token);

      var success = function() {
        defer.resolve(sessionId);
      };

      var error = function(data, status, headers) {
        var headerObj = headers(),
          id = headerObj[token.toLowerCase()];
        if ( id ) {
          $cookieStore.put(token, id);
        }
        defer.resolve(id);
      };

      if ( sessionId ) {
        $http.defaults.headers.common[token] = sessionId;
        $http.post('/transmission/rpc')
          .success(success) /* Use the defined session_id */
          .error(error); /* Re-set the session_id with updated header */
      } else {
        $http.post('/transmission/rpc')
          .error(error);
      }

      return defer.promise;
    }],
    PREFS: ['$q', '$cookieStore', function($q, $cookieStore) {
      var defer = $q.defer();
      defer.resolve($cookieStore.get('transmission.prefs'));
      return defer.promise;
    }]
  }
});

angular.module('transmission', [
  'ngRoute',
  'ngCookies',
  'headroom',
  'lrInfiniteScroll',
  'transmission.common',
  'transmission.torrents',
  'transmission.settings'
])
.config(function($routeProvider, $httpProvider, SESSION_ID) {
  $httpProvider.defaults.headers.common['X-Transmission-Session-Id'] = SESSION_ID;
  $httpProvider.interceptors.push('httpInterceptor');
  $routeProvider.otherwise({
    redirectTo:'/torrents'
  });
});
