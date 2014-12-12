angular.module('transmission.torrents', [
  'transmission.torrents.filters',
  'transmission.torrents.services'
])
.config(function($routeProvider) {
  $routeProvider.when('/torrents', {
    templateUrl: 'torrents/torrents.tpl.html',
    controller: 'TorrentsCtrl as torrents',
    resolve: {
      list: function(transmissionRPC, transmissionAPI) {
        return transmissionRPC.torrents(transmissionAPI.get);
      }
    }
  });
});
