angular.module('transmission.common.constants.transmission', [])
.constant('RPC_URL', 'http://24.252.20.168:9000/transmission/rpc')
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