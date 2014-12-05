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
      torrents: function(transmissionRPC, GET_TORRENTS) {
        return transmissionRPC.torrents(GET_TORRENTS);
      }
    }
  });
});
