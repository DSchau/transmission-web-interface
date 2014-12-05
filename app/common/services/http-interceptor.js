angular.module('transmission.common.services.httpInterceptor', [
  'transmission.common.constants.transmission'
])
.factory('httpInterceptor', function($q, $injector, RPC_URL, transmission) {
  var needsHeader = function(request) {
    return request.url === RPC_URL && !request.headers[transmission.token];
  };
  return {
    request: function(request) {
      return request || $q.when(request);
    },
    response: function(response) {
      return response;
    },
    responseError: function(response) {
      if ( response.status === 409 && !transmission[transmission.token] ) {
        var token = response.headers()[transmission.token.toLowerCase()];
        transmission[transmission.token] = token;
        return {
          token: token
        };
      }
      return $q.reject(response);
    },
    requestError: function(request) {
      return $q.reject(request);
    }
  };
});