angular.module('transmission.common.filters.humanize', [])
.filter('humanize', function(moment) {
  var humanize = function(input, unit) {
    if ( typeof input === 'number' ) {
      var duration = moment.duration(input, (typeof unit === 'undefined' ? 'seconds' : unit));
      if ( duration.hours() >= 24 ) {
        return duration.humanize();
      } else if ( duration.hours() > 1 ) {
        return duration.hours() + ' hours, ' + duration.minutes() + ' minutes remaining';
      } else {
        return duration.minutes() + ' minutes remaining';
      }
    }
  };
  return humanize; 
});