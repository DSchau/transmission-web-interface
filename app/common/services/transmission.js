angular.module('transmission.common.services.transmission', [
  'ngResource',
  'transmission.common.constants.transmission'
])
.factory('transmissionRPC', function($resource, RPC_URL) {
  return $resource(RPC_URL, {}, {
    torrents: {
      method: 'POST',
      isArray: false,
      transformResponse: function(data) {
        var json = angular.fromJson(data);
        json.torrents = (json.arguments||{}).torrents;
        delete json.arguments;
        return json;
      }
    }
  });
});