angular.module('transmission.common.services.transmissionRPC', [
  'ngResource',
  'transmission.common.services.transmissionAPI',
  'transmission.common.constants.transmission'
])
.value('transformToObject', function(arr) {
  var torrents = {};
  if ( arr && arr.length ) {
    for ( var i = 0; i < arr.length; i++ ) {
      var torrent = arr[i];
      torrents[torrent.id] = torrent;
    }
  }
  return torrents;
})
.factory('transmissionRPC', function($resource, RPC_URL, transmissionAPI, transformToObject) {
  var RPC = new $resource(RPC_URL, {}, {
    torrents: {
      method: 'POST',
      isArray: false,
      transformResponse: function(data) {
        var json = angular.fromJson(data);
        json.torrents = transformToObject(((json.arguments||{}).torrents)||[]);
        return json;
      }
    },
    stats: {
      method: 'POST',
      isArray: false,
      transformResponse: function(data) {
        var json = angular.fromJson(data);
        return json.arguments;
      }
    },
    action: {
      method: 'POST',
      isArray: false
    }
  });

  return RPC;
});
