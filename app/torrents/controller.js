angular.module('transmission.torrents')
.controller('TorrentsCtrl', function(torrents, keyboard) {
  this.torrentList = torrents;
  this.selectedTorrents = {};

  this.selectTorrent = function(torrent, index, event, torrentsArr) {
    keyboard.multiSelect(torrent, index, event, torrentsArr);
    this.selectedTorrents = keyboard.selected;
  };

  this.keyPress = function(event) {
    console.log(event);
  };
});