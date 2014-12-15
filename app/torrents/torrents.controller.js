angular.module('transmission.torrents')
.controller('TorrentsCtrl', function($interval, list, torrents, transmissionRPC, transmissionAPI, keyboard) {
  var self = this;

  torrents.list = this.list = list;
  torrents.selected = this.selectedTorrents = {};

  this.mostRecent = -1;

  this.limit = 50;

  this.selectTorrent = function(torrent, index, event, torrentsArr) {
    this.extraInfo = false;
    keyboard.select(torrent, index, event, torrentsArr);
    torrents.selected = this.selectedTorrents = keyboard.selected;
    this.mostRecent = (this.mostRecent === torrent.id ) ? -1 : torrent.id;
    if ( this.mostRecent ) {
      transmissionRPC.torrents(transmissionAPI.getAdditional(torrent.id), function(data) {
        angular.extend(torrent, data.arguments.torrents[0]);
      });
    }
  };

  this.showCategory = function(event, category, torrent) {
    event.stopPropagation();
    torrent.category = category;
  };

  this.loadMore = function() {
    console.log('loading more..');
  };

  this.doubleClick = function(torrent) {
    this.extraInfo = torrent.id;
  };

  this.recentTorrents = $interval(function() {
    transmissionRPC.torrents(transmissionAPI.getRecent, function(response) {
      console.log(response);
    });
  }, 5000);
});
