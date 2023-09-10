const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BlogSchema = new Schema({
  title: { type: String },
  summary: { type: String },
  content: { type: String },
  author: { type: String },
});

const BlogModel = model("Blog", BlogSchema);

module.exports = BlogModel;
