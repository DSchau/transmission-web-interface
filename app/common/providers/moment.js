angular.module('transmission.common.providers.moment', [])
.provider('moment', function() {
  var options = {
    thresholds: {
      s: 55,
      m: 55
    },
    locales: {}
  };

  var recognizedOptions = [
    'thresholds',
    'locales'
  ];

  var setOptions = function(object) {
    options = object;
  };

  var configureMoment = function(moment) {
    for ( var option in options ) {
      if ( recognizedOptions.indexOf(option) > -1 ) {
        switch (option) {
          case 'thresholds':
            for ( var threshold in option ) {
              moment.relativeTimeThreshold(threshold, option[threshold]);
            }
            break;
          case 'locales':
            for ( var locale in option ) {
              moment.locale(locale, option[locale]);
            }
            break;
        }
      }
    }
    return moment;
  };

  return {
    setOptions: setOptions,
    $get: function() {
      var moment = window.moment;
      return configureMoment(moment);
    }
  };
});