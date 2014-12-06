angular.module('transmission.common.services.transmissionAPI', [
  'transmission.common.constants.transmission'
])
.value('Method', function(name, args) {
  this.method = name;
  this.arguments = args;
})
.value('getTorrentArray', function(ids) {
  return typeof ids === 'object' ? ids : [ids];
})
.factory('transmissionAPI', function(Method, getTorrentArray, TORRENT_FIELDS) {
  var api = {};

  api.get = new Method('torrent-get', {
    fields: TORRENT_FIELDS
  });

  api.add = function(args) {
    return new Method('torrent-add', args);
  };

  api.remove = function(ids) {
    var torrents = getTorrentArray(ids);
    return new Method('torrent-remove', {
      ids: torrents
    });
  };

  api.set = function(ids, args) {
    var torrents = getTorrentArray(ids);
    return new Method('torrent-set', args);
  };

  api.pause = function(ids) {
    var torrents = getTorrentArray(ids);
    return new Method('torrent-stop', {
      ids: torrents
    });
  };

  api.start = function(ids) {
    var torrents = getTorrentArray(ids);
    return new Method('torrent-start', {
      ids: torrents
    });
  };

  api.move = function(ids, location) {
    var torrents = getTorrentArray(ids);
    return new Method('torrent-move', {
      ids: torrents
    });
  };

  api.verify = function(ids) {
    var torrents = getTorrentArray(ids);
    return new Method('torrent-verify', {
      ids: torrents
    });
  };

  api.stats = new Method('session-stats');

  return api;
});