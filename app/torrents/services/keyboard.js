angular.module('transmission.torrents.services.keyboard', [])
.factory('keyboard', function() {
  var keyboard = {};

  keyboard.prevIndex = false;
  keyboard.index = -1;

  keyboard.multiSelect = function(item, index, event, arr) {
    if ( event.shiftKey) {
      if ( keyboard.prevIndex ) {
        keyboard.selectRange(arr, keyboard.prevIndex, index);
      } else {
        keyboard.prevIndex = index;
      }
    } else {
      keyboard.prevIndex = false;
    }
  };

  keyboard.selectRange = function(arr, from, to) {
    if ( to < from ) {
      from = to;
      to = from;
    }
    for ( var i = from; i < to; i++ ) {
      if ( arr[i] ) { 
        arr[i].selected = true;
      }
    }
    return arr;
  };

  return keyboard;
});