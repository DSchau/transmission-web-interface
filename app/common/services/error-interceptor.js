angular.module('transmission.common.services.errorInterceptor', [])
.factory('errorInterceptor', function($q) {
  return {
    request: function(request) {
      return request;
    },
    response: function(response) {
      return response;
    },
    requestError: function(request) {
      console.log('request error', request);
      return $q.reject(request);
    },
    responseError: function(response) {
      console.log('response error', response);
      return $q.reject(response);
    }
  };
});