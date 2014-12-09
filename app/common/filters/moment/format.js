angular.module('transmission.common.filters.moment.format', [])
.filter('format', function(moment) {
  var formatFilter = function(input, formatStr) {
    if ( input ) {
      var momentObj = moment.isMoment(input) ? input : moment(input);
      return momentObj.format(formatStr || 'MMM Do, YYYY');
    }
    return input;
  };
  return formatFilter;
});
