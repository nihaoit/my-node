const log = require('./log');

function Course(name) {
  this.name = name;
}

// class里面的静态方法就是写在构造函数本身上面的方法
// 如果写在prototype上面的方法，必须要实例化后才可以使用！

Course.post = async function(request, h) {
  const { name, price } = request.payload;
  const newData = { name, price };
  log.info({ newData }, 'insert a course record!');
  const result = { code: 0, msg: '插入课程成功!' };
  return result;
};

module.exports = { Course };
