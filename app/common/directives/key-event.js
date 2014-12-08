angular.module('transmission.common.directives.keyEvent', [
  'transmission.common.services.torrents'
])
.value('shouldPrevent', function(event) {
  var preventableTypes = [
    'TEXT',
    'PASSWORD',
    'FILE',
    'EMAIL',
    'SEARCH',
    'DATE'
  ];
  var d = event.srcElement || event.target;
  return (d.tagName.toUpperCase() === 'INPUT' && preventableTypes.indexOf(d.type.toUpperCase()) > -1) ||
          d.tagName.toUpperCase() === 'TEXTAREA';
})
.directive('keyEvent', function(torrents, shouldPrevent, transmissionRPC, transmissionAPI) {
  var keyMap = {
    65: function selectAll(event) {
      if ( event.metaKey ) {
        for ( var i = 0; i < torrents.list.torrents.length; i++ ) {
          var torrent = torrents.list.torrents[i];
          torrents.selected[torrent.id] = torrent.id;
        }
      }
    },
    8: function deleteSelected() {
      /* DELETE */
    },
    68: function selectNone(event) {
      if ( event.metaKey ) {
        torrents.selected = {};
      }
    }
  };

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.on(attrs.keyEvent, function(event) {
        var callback = keyMap[event.keyCode];
        if ( callback && !shouldPrevent(event) ) {
          event.preventDefault();
          callback(event);
          scope.$apply();
        }
      });
    }
  };
});