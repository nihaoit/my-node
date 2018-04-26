const Joi = require('joi');

class CourseSerializer {
  constructor() {
    this.schema = { name: Joi.string(), age: Joi.number() };
  }
}

module.exports = { CourseSerializer };
