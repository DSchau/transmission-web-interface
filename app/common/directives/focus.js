angular.module('transmission.common.directives.focus', [])
.directive('hasFocus', function() {
  return {
    restrict: 'A',
    scope: {
      focus: '=hasFocus'
    },
    link: function(scope, element) {
      console.log('hel');
      scope.$watch('focus', function(hasFocus) {
        if ( hasFocus ) {
          element[0].focus();
        }
      });
    }
  };
});