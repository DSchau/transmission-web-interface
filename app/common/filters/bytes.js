angular.module('transmission.common.filters.bytes', [])
.value('fileSize', function (bytes, second, si) {
  var thresh = si ? 1000 : 1024;
  var exp = Math.log(bytes) / Math.log(thresh) | 0;
  var result = (bytes / Math.pow(thresh, exp)).toFixed(2);
  return (result + ' ' + (exp === 0 ? 'KB': 'KMGTPEZY'[exp - 1] + 'B')) + (second ? '/s' : '');
})
.filter('bytes', function(fileSize) {
  return fileSize;
});