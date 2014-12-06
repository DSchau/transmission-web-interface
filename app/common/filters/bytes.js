angular.module('transmission.common.filters.bytes', [])
.constant('UNITS', {
  bytes: 1,
  kilobytes: 1024,
  megabits: 1024 * 1024,
  megabytes: (1024 * 1024) * 8
})
.constant('LABEL', {
  bytes: 'b/s',
  kilobytes: 'kB/s',
  megabits: 'mB/s',
  megabytes: 'MB/s'
})
.filter('bytes', function(UNITS, LABEL) {
  return function(input, unit) {
    var conversion = typeof unit === 'undefined' ? UNITS.kilobytes : UNITS[unit],
      label = typeof unit === 'undefined' ? LABEL.kilobytes : LABEL[unit],
      value = input / conversion;
    if ( value > 1000 ) {
      value = input / UNITS.megabytes;
      label = LABEL.megabytes;
    }
    return (Math.round(value*100)/100) + ' ' + label;
  };
});