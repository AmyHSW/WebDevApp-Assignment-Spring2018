const mongoose = require('mongoose');
const mongoDB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/webdevDB';
const db = mongoose.connect(mongoDB_URI);
module.exports = db;
