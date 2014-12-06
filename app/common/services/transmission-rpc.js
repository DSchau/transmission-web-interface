angular.module('transmission.common.services.transmission', [
  'ngResource',
  'transmission.common.constants.transmission'
])
.factory('transmissionRPC', function($resource, RPC_URL) {
  return $resource(RPC_URL, {}, {
    init: {
      method: 'POST',
      isArray: false
    },
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
    }
  });
});