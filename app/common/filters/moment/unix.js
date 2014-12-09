angular.module('transmission.common.filters.moment.unix', [])
.filter('unix', function(moment) {
  var unixFilter = function(input) {
    if ( input ) {
      var timestamp = typeof input === 'number' ? input : parseInt(input, 10);
      return moment.unix(timestamp);
    }
    return input;
  };
  return unixFilter;
});
