angular.module('transmission.torrents')
.controller('TorrentsCtrl', function(torrents, keyboard) {
  this.torrentList = torrents;
  this.selectedTorrents = [];

  this.selectTorrent = function(torrent, index, event) {
    keyboard.multiSelect(torrent, index, event, this.torrentList);
    if ( keyboard.index > -1 ) {
      torrent[keyboard.index].selected = false;
    }
    torrent.selected = true;
    keyboard.index = index;
  };
});