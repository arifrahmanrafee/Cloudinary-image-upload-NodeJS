const mongoose = require('mongoose');

async function connectDb(params) {
  await mongoose.connect('mongodb://localhost:27017/imagekit');
  console.log('Db Connected');
}

module.exports = connectDb;
