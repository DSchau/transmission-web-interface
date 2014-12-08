angular.module('transmission.common.services.torrents', [])
.factory('torrents', function() {
  var torrents = {};
  
  torrents.list = [];
  torrents.selected = {};
  
  return torrents;
});