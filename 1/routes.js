const Joi = require('joi');
const log = require('./log');
const logger = log.child({ module: 'home' });
const { CourseSerializer } = require('./CourseSerializer');
const { Course } = require('./Course');

const route = function(server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      // log.debug({ name: 'index' }, 'home success!');

      // logger.info({ req: request }, 'child success');
      // return 'Hello, world!';
      return h.response({ code: 0, msg: 'hello,world!' }).state('userToken', 'ABC');
    }
  });

  server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
      return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    },
    options: {
      tags: ['api'],
      description: 'get a name!',
      validate: {
        params: {
          name: Joi.string()
            .min(3)
            .max(6)
            .description('3 to 6')
        }
      },
      pre: [
        () => {
          const flag = true;
          if (flag) {
            logger.info('pre request');
          }
          return flag;
        }
      ]
    }
  });

  server.route({
    method: 'POST',
    path: '/courses', // handler: Course.post
    handler: Course.post,
    options: {
      tags: ['api'],
      description: 'add a course',
      validate: { payload: { name: Joi.string().required(), price: Joi.number().required() } }
      // 特别注意：这里会对response的返回形成约束，如果不对的话，就无法返回！
      // response: { schema: new CourseSerializer().schema }
    }
  });
};

module.exports = route;
