function Course(name) {
  this.name = name;
}

Course.prototype.post = function() {
  console.log('post');
};
