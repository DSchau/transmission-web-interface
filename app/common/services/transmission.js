angular.module('transmission.common.services.transmission', [
  'ngResource',
  'transmission.common.constants.transmission'
])
.factory('transmissionRPC', function($resource, RPC_URL, GET_TORRENTS) {
  return $resource(RPC_URL, {}, {
    torrents: {
      method: 'POST',
      isArray: false,
      params: GET_TORRENTS,
      headers: {
        'Content-Type': 'application/json'
      },
      transformResponse: function(data) {
        var json = angular.fromJson(data);
        json.torrents = (json.arguments||{}).torrents;
        delete json.arguments;
        return json;
      }
    }
  });
});