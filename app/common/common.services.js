angular.module('transmission.common.services', [
  'transmission.common.services.torrents',
  'transmission.common.services.transmissionRPC',
  'transmission.common.services.transmissionAPI',
  'transmission.common.services.errorInterceptor',
  'transmission.common.services.httpInterceptor'
]);