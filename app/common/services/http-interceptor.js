angular.module('transmission.common.services.httpInterceptor', [
  'transmission.common.constants.transmission'
])
.factory('httpInterceptor', function($q) {
  return {
    request: function(request) {
      return request || $q.when(request);
    },
    response: function(response) {
      return response;
    }
  };
});