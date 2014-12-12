angular.module('transmission.common.directives.infiniteScroll', [])
.directive('infiniteScroll', function($document) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var raw = element[0];

      $document.bind('scroll', function() {
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          scope.$apply(attrs.infiniteScroll);
        }
      });
    }
  };
});

