angular.module('transmission.common.filters.moment.calendar', [])
.filter('calendar', function(moment) {
  var calendarFilter = function(input) {
    if ( input ) {
      return moment.isMoment(input) ? input.calendar() : moment(input).calendar();
    }
    return input;
  };

  return calendarFilter;
});
