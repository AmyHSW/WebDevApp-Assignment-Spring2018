const mongoose = require('mongoose');
let mongoDB_URI = 'mongodb://localhost:27017/webdevDB';
if (process.env.MONGODB_URI) {
  mongoDB_URI = process.env.MONGODB_URI;
}

const db = mongoose.connect(mongoDB_URI);

module.exports = db;
