angular.module('transmission.common.services.transmissionRPC', [
  'ngResource',
  'transmission.common.services.transmissionAPI',
  'transmission.common.constants.transmission'
])
.factory('transmissionRPC', function($resource, RPC_URL, transmissionAPI) {
  var RPC = new $resource(RPC_URL, {}, {
    torrents: {
      method: 'POST',
      isArray: false,
      transformResponse: function(data) {
        var json = angular.fromJson(data);
        json.torrents = (json.arguments||{}).torrents;
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