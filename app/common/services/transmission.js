angular.module('transmission.common.services.transmission', [
  'ngResource',
  'transmission.common.constants.transmission'
])
.factory('transmission', function() {
  var transmission = {};
  transmission.token = 'X-Transmission-Session-Id';
  transmission[transmission.token] = '';
  return transmission;
})
.factory('transmissionRPC', function($resource, transmission, RPC_URL) {
  return $resource(RPC_URL, {}, {
    init: {
      method: 'POST',
      isArray: false
    },
    torrents: {
      method: 'POST',
      isArray: false,
      transformResponse: function(data) {
        try {
          var json = angular.fromJson(data);
          json.torrents = (json.arguments||{}).torrents;
          return json;
        } catch(e) {
          return data;
        }
      }
    }
  });
});