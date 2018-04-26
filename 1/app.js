'use strict';

const Hapi = require('hapi');
const Joi = require('joi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const route = require('./routes');

const log = require('./log');
const { Course } = require('./Course2');
const { CourseSerializer } = require('./CourseSerializer');

const logger = log.child({ module: 'resources', resource: 'carts' });

const server = Hapi.server({
  port: 3005,
  host: 'localhost'
});

const init = async () => {
  const swaggerOptions = {
    info: { title: '魔法助理接口说明文档' },
    tags: [{ name: 'admin', description: '后台管理' }]
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);

  route(server);
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
