angular.module('transmission.common.constants.transmission', [])
.constant('RPC_URL', '/transmission/rpc')
.constant('GET_TORRENTS', {
  method: 'torrent-get',
  arguments: { 
    fields: [
      'id',
      'addedDate',
      'name',
      'totalSize',
      'error',
      'errorString',
      'eta',
      'isFinished',
      'isStalled',
      'leftUntilDone',
      'metadataPercentComplete',
      'peersConnected',
      'peersGettingFromUs',
      'peersSendingToUs',
      'percentDone',
      'queuePosition',
      'rateDownload',
      'rateUpload',
      'recheckProgress',
      'seedRatioMode',
      'seedRatioLimit',
      'sizeWhenDone',
      'status',
      'trackers',
      'downloadDir',
      'uploadedEver',
      'uploadRatio',
      'webseedsSendingToUs'
    ]
  }
});