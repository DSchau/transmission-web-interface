angular.module('transmission.torrents', [
  'transmission.torrents.filters',
  'transmission.torrents.services',
  'transmission.common.services'
])
.config(function($routeProvider) {
  $routeProvider.when('/torrents', {
    templateUrl: 'torrents/torrents.tpl.html',
    controller: 'TorrentsCtrl as torrents',
    resolve: {
      torrents: function(transmissionRPC, transmissionAPI) {
        return transmissionRPC.torrents(transmissionAPI.get);
      }
    }
  });
});
