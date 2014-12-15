angular.module('transmission')
.value('getIds', function(selected) {
  return Object.keys(selected).map(function(id) {
    return parseInt(id, 10);
  });
})
.value('performAction', function(torrents, id, action) {
  console.log(torrents, id, action);
  var actionMap = {
    remove: function() {
      delete torrents[id];
    },
    pause: function() {
      torrents[id].status = 0;
    },
    start: function() {
      torrents[id].status = 6;
    }
  };
  return (function() {
    return actionMap[action]();
  })();
})
.controller('AppCtrl', function(torrents, getIds, transmissionRPC, transmissionAPI, NAV_CLASSES, STATUSES, performAction) {
  var self = this;
  torrents.list = this.torrents;
  torrents.selected = this.selected;

  this.alerts = [];
  this.filter = {};

	this.navClasses = NAV_CLASSES;
  this.statuses = STATUSES;

  this.showFilter = false;

  this.statistics = transmissionRPC.stats(transmissionAPI.stats);

  this.action = function(action) {
    var ids = getIds(torrents.selected);
    transmissionRPC.action(transmissionAPI[action](ids), function(result) {
      var success = result.result === 'success';
      if ( success ) {
        ids.forEach(function(id) {
          performAction(self.torrents, id, action);
        });
      }
      var message = action + (action[action.length-1] === 'e' ? 'd!' : 'ed!');
      self.alerts.push({
        type: success ? 'success' : 'error',
        timeout: 5000,
        message: success ? 'torrent(s) ' + message : 'Torrent(s) failed to ' + message.replace(/d!$/, '!')
      });
    });
  };

  this.setStatus = function(status) {
    if ( status.label === 'Active' ) {
      delete this.filter.status;
      this.filter.isStalled = false;
    } else {
      this.filter.status = status.value;
    }
    this.statuses.forEach(function(status) {
      status.active = false;
    });
    status.active = true;
  };
});
