const mongoose = require("mongoose");

const restSchema = new mongoose.Schema({
    image_url: String,
    title: String,
    address: String,
    description: String,
    type: String,
  });

  module.exports = mongoose.model("restdatas", restSchema);
