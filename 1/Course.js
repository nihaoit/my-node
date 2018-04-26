const log = require('./log');
class Course {
  constructor(name) {
    this.name = name;
  }

  static async post(request, h) {
    const { name, price } = request.payload;
    const newData = { name, price };
    log.info({ newData }, 'insert a course record!');
    const result = {
      code: 0,
      msg: '插入课程成功!'
    };
    return result;
  }
}

module.exports = { Course };
