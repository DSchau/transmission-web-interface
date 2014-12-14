angular.module('transmission.torrents.filters.smartFilter', [])
.filter('smartFilter', function() {
  var smartFilter = function(arr, filter) {
    if ( filter && arr ) {
      var expressions = {},
        filteredArr = [];

      Object.keys(filter).forEach(function(prop) {
        if ( filter[prop] !== 'All' ) {
          expressions[prop] = new RegExp(filter[prop].replace(/(\s|-|\.)/g, '\\W'), 'i');
        }
      });
      for ( var i = 0; i < arr.length; i++ ) {
        var valid = true;
        for ( var expression in expressions ) {
          if ( expressions.hasOwnProperty(expression) ) {
            if ( !expressions[expression].test(arr[i][expression]) ) {
              valid = false;
              break;
            }
          }
        }
        if ( valid ) {
          filteredArr.push(arr[i]);
        }
      }
      return filteredArr;
    }
    return arr;
  };

  return smartFilter;
});
