module.exports = {
  main: {
    options: {
      port: 9001,
      hostname: '0.0.0.0',
      base: '<%= dist %>',
      open: true,
      middleware: function(connect, options) {
        var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
        return [
          proxy,
          connect.static(options.base),
          connect.directory(options.base)
        ];
      }
    },
    proxies: [
      {
        context: '/transmission/rpc',
        host: '24.252.20.168',
        port: '9000'
      }
    ]
  }
};