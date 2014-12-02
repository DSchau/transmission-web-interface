angular.module('transmission')
.constant('NAV_CLASSES', {
  initial : "nav",
  pinned : "nav-up",
  unpinned : "nav-down",
  top : "nav-top",
  notTop : "nav-below"
})
.controller('AppCtrl', function(NAV_CLASSES) {
	this.navClasses = NAV_CLASSES;
});