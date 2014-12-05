angular.module('transmission.torrents', [
  'transmission.torrents.services',
  'transmission.torrents.filters',
  'transmission.common.constants',
])
.config(function($routeProvider) {
  $routeProvider.when('/torrents', {
    templateUrl: 'torrents/torrents.tpl.html',
    controller: 'TorrentsCtrl as torrents',
    resolve: {
      torrents: function($q, $http, transmission, transmissionRPC, GET_TORRENTS) {
        var defer = $q.defer();
        transmissionRPC.init(null, function(data) {
          $http.defaults.headers.common[transmission.token] = transmission[transmission.token];
          transmissionRPC.torrents(GET_TORRENTS, function(response) {
            defer.resolve(response.arguments.torrents);
          });
        });
        return defer.promise;
      }
    }
  });
});
