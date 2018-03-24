//we create a schema
const mongoose = require("mongoose");

const PageSchema = mongoose.Schema({
  _website: {type: mongoose.Schema.ObjectId, ref: "WebsiteModel"},
  name: {type: String, required: true},
  title: String,
  description: String,
  widgets: [{type: mongoose.Schema.Types.ObjectId, ref: 'WidgetModel'}],
  dateCreated: {type: Date, default: Date.now} //Date.now is the current time
}, {collection: "assignment.page"});

module.exports = PageSchema;
