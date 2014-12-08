angular.module('transmission')
.constant('NAV_CLASSES', {
  initial : "nav",
  pinned : "nav-up",
  unpinned : "nav-down",
  top : "nav-top",
  notTop : "nav-below"
})
.constant('STATUSES', [
  'All',
  'Active',
  'DL',
  'UL',
  'Paused'
])
.value('getIds', function(selected) {
  return Object.keys(selected).map(function(id) {
    return parseInt(id, 10);
  });
})
.controller('AppCtrl', function(torrents, getIds, transmissionRPC, transmissionAPI, NAV_CLASSES, STATUSES) {
  this.torrents = torrents.list;
  this.selectedTorrents = torrents.selected;

	this.navClasses = NAV_CLASSES;
  this.statuses = STATUSES;
  this.status = this.statuses[0];

  this.showFilter = false;

  this.statistics = transmissionRPC.stats();

  this.action = function(action) {
    this[action + 'Result'] = transmissionRPC.action(transmissionAPI[action](getIds(torrents.selected)));
  };
});