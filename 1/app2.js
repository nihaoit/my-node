const Joi = require('joi');

var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name: 'myapp',
  streams: [
    {
      level: 'info',
      stream: process.stdout // log INFO and above to stdout
    },
    {
      level: 'error',
      path: './logs/myapp-error.log' // log ERROR and above to a file
    }
  ]
});

log.info('hi');

const schema = {
  a: Joi.string()
    .min(3)
    .max(6)
};

Joi.validate({ a: 'luokai7' }, schema, function(err, value) {
  if (err) {
    // console.log(err);
    log.error(err);
  } else {
    // console.log(value);
    log.info(value);
  }
});
