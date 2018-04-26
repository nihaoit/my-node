const bunyan = require('bunyan');

function reqSerializer(req) {
  return {
    method: req.method,
    url: req.url,
    headers: req.headers
  };
}

/* var log = bunyan.createLogger({
  name: 'myapp',
  serializers: {
    req: reqSerializer
  }
}); */

var log = bunyan.createLogger({
  name: 'myapp',
  streams: [
    {
      level: 'debug',
      stream: process.stdout // log INFO and above to stdout
    },
    {
      level: 'info',
      //stream: './logs/myapp-info.log' // log INFO and above to stdout
      stream: process.stdout // log INFO and above to stdout
    },
    {
      level: 'error',
      path: './logs/myapp-error.log' // log ERROR and above to a file
    }
  ],
  serializers: {
    req: reqSerializer
  }
});

log.addSerializers({ req: reqSerializer });

module.exports = log;
