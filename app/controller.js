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
  console.log('hello!');
  var self = this;
  torrents.list = this.torrents;
  torrents.selected = this.selected;

  this.alerts = [];

	this.navClasses = NAV_CLASSES;
  this.statuses = STATUSES;
  this.status = this.statuses[0];

  this.showFilter = false;

  this.statistics = transmissionRPC.stats(transmissionAPI.stats);

  this.action = function(action) {
    transmissionRPC.action(transmissionAPI[action](getIds(torrents.selected)), function(result) {
      var success = result.result === 'success';
      var message = action + (action[action.length-1] === 'e' ? 'd!' : 'ed!');
      self.alerts.push({
        type: success ? 'success' : 'error',
        timeout: 5000,
        message: success ? 'torrent(s) ' + message : 'Torrent(s) failed to ' + message.replace(/d!$/, '!')
      });
    });
  };
});
