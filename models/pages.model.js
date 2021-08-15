"use strict";

const mongoose = require("mongoose");
const recipesSchema = require("./recipies.model.js");



//////////////////////////////////////////////////////////////////////////////////

const pagesSchema = new mongoose.Schema(
  {
    name: { type: String },
    viewsOfPage: { type: Number, default: 0 },
    pageName: { unique: true, type: String },
    coverImg: { type: String },
    profileImg: { type: String },
    info: { type: String },
    recipes: [recipesSchema],
  },
  { timestamps: true }
);

//////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////
module.exports = pagesSchema;