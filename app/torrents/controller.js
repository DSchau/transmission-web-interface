angular.module('transmission.torrents')
.controller('TorrentsCtrl', function(list, torrents, keyboard) {
  torrents.list = this.list = list;
  torrents.selected = this.selectedTorrents = {};

  this.mostRecent = -1;

  this.selectTorrent = function(torrent, index, event, torrentsArr) {
    keyboard.select(torrent, index, event, torrentsArr);
    torrents.selected = this.selectedTorrents = keyboard.selected;
    this.mostRecent = (this.mostRecent === torrent.id ) ? -1 : torrent.id;
  };
});