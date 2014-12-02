angular.module('transmission.common.directives.focus', [])
.directive('hasFocus', function($timeout) {
  return {
    restrict: 'A',
    scope: {
      focus: '=hasFocus'
    },
    link: function(scope, element) {
      scope.$watch('focus', function(hasFocus) {
        if ( hasFocus ) {
          $timeout(function() {
            element[0].focus();
          });
        }
      });
    }
  };
});