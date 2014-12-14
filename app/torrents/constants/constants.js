angular.module('transmission.torrents.constants', [])
.constant('NAV_CLASSES', {
  initial : "nav",
  pinned : "nav-up",
  unpinned : "nav-down",
  top : "nav-top",
  notTop : "nav-below"
})
.constant('STATUSES', [
  {
    label: 'All',
    value: '',
    active: true
  },
  {
    label: 'Active',
    value: '1'
  },
  {
    label: 'DL',
    value: '2'
  },
  {
    label: 'UL',
    value: '6'
  },
  {
    label: 'Paused',
    value: '0'
  }
]);
