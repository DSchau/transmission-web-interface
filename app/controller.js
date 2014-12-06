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
  'Downloading',
  'Seeding',
  'Paused',
  'Finished'
])
.controller('AppCtrl', function(transmissionRPC, transmissionAPI, NAV_CLASSES, STATUSES) {
	this.navClasses = NAV_CLASSES;
  this.statuses = STATUSES;

  this.showFilter = false;

  this.statistics = transmissionRPC.stats(transmissionAPI.stats);

  this.pause = function() {
    console.log('pausing torrent!');
  };
});