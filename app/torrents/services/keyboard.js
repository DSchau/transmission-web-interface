angular.module('transmission.torrents.services.keyboard', [])
.factory('keyboard', function() {
  var keyboard = {};

  keyboard.modifiers = {
    prev: false,
    current: false
  };

  keyboard.selected = {};

  keyboard.multiSelect = function(item, index, event, arr) {
    var id = item.id || index;
    if ( event.shiftKey ) {
      keyboard.modifiers.prev = typeof keyboard.modifiers.current === 'number' ? keyboard.modifiers.current : false;
      keyboard.modifiers.current = index;
      if ( typeof keyboard.modifiers.prev === 'number' ) {
        keyboard.selectRange(arr);
      } else {
        keyboard.selected[index] = id;
      }
    } else {
      keyboard.modifiers = { current: index, prev: false };
      keyboard.selected = event.metaKey ? keyboard.selected : {};
      keyboard.selected[index] = id;
    }
  };

  keyboard.selectRange = function(arr) {
    var from = keyboard.modifiers.prev,
      to = keyboard.modifiers.current;

    for ( var i = (from < to ? from : to); i < (to > from ? to+1 : from); i++ ) {
      keyboard.selected[i] = arr[i].id;
    }
  };

  return keyboard;
});