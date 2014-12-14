angular.module('transmission.common.directives.alert', [])
.directive('alert', function() {
  return {
    restrict: 'EA',
    scope: {
      type: '=',
      message: '='
    },
    templateUrl: 'common/directives/alert/alert.tpl.html',
    link: function(scope, element) {
      scope.close = function() {
        element.remove();
      };
    }
  };
})
.directive('alerts', function($timeout) {
  return {
    restrict: 'EA',
    scope: {
      array: '='
    },
    templateUrl: 'common/directives/alert/alerts.tpl.html',
    link: function(scope, element) {
      scope.$watch('array', function(array) {
        if ( array && array.length > 0 ) {
          var lastIndex = array.length-1;
          $timeout(function() {
            array.splice(lastIndex, 1);
            scope.$apply();
          }, scope.array[lastIndex].timeout || 5000);
        }
      }, true);
    }
  };
});
