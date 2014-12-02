angular.module('transmission')
.constant('NAV_CLASSES', {
  initial : "nav",
  pinned : "nav-up",
  unpinned : "nav-down",
  top : "nav-top",
  notTop : "nav-below"
})
.constant('STATUSES', [
  {
    label: 'All'
  },
  {
    label: 'Active'
  },
  {
    label: 'Downloading'
  },
  {
    label: 'Seeding'
  },
  {
    label: 'Paused'
  },
  {
    label: 'Finished'
  }
])
.controller('AppCtrl', function(NAV_CLASSES, STATUSES) {
	this.navClasses = NAV_CLASSES;
  this.statuses = STATUSES;

  this.showFilter = false;
});