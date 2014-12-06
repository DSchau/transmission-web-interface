angular.module('transmission.settings', [
  'ngRoute',
  'ngCookies'
])
.config(function($routeProvider) {
  $routeProvider.when('/settings', {
    templateUrl: 'settings/settings.tpl.html',
    controller: 'SettingsCtrl as settings'
  });
});