angular.module('transmission.common.directives.keyEvent', [])
.directive('keyEvent', function(transmissionRPC, transmissionAPI) {
  var keyMap = {
    65: 'a',
    8: 'Del',
    68: 'd',
    91: 'cmd',
    17: 'ctrl'
  };

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on(attrs.keyEvent, function(event) {
        if ( event.keyCode === 8 ) {
          event.preventDefault();
        }
      });
    }
  };
});