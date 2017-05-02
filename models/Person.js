const mongoose = require('mongoose');

var Person = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: String,
  age: Number
});

module.exports = mongoose.model('Person', Person);
