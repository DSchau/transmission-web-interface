angular.module('transmission.common.directives.clearable', [])
.directive('clearable', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if ( attrs.type !== 'text' ) {
        throw new Error('The `clearable` directive is only supported with <input type="text">');
      }
      
    } 
  };
});