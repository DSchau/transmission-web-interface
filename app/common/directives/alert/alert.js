angular.module('transmission.common.directives.alert', [])
.directive('alert', function() {
  return {
    restrict: 'EA',
    scope: {
      type: '=',
      message: '='
    },
    templateUrl: 'common/directives/alert/alert.tpl.html'
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
      scope.$watch('array', function() {
        if ( scope.array && scope.array.length > 0 ) {
          var lastIndex = scope.array.length-1;
          $timeout(function() {
            scope.array.splice(lastIndex, 1);
            scope.$apply();
          }, scope.array[lastIndex] || 5000);
        }
      });
    }
  };
});