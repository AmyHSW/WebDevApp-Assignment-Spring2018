//we create a schema
const mongoose = require("mongoose");
const websiteSchema = require('../website/website.schema.server');

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  websites: [websiteSchema],
  dob: Date,
  salary: Number,
}, {collection: 'assignment.user'});

module.exports = UserSchema;




