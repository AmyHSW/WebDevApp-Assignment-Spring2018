//we create a schema
const mongoose = require("mongoose");
const pageSchema = require("../page/page.schema.server");

const WebsiteSchema = mongoose.Schema({
  _user: {type: mongoose.Schema.ObjectId, ref: "User"},
  name: {type: String, required: true},

  description: String,
  pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'Page'}],
  dateCreated: {type: Date, default: Date.now} //Date.now is the current time
}, {collection: "assignment.website"});

module.exports = WebsiteSchema;
