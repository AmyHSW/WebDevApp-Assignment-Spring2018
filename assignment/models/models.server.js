const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost:27017/webdevDB');
// this is heroku db connection
// var db = mongoose.createConnection('mongodb://<dbuser>:<dbpassword>@ds263707.mlab.com:63707/heroku_mwrl8mdn');


module.exports = db;
