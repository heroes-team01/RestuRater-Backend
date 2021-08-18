"use strict";

const mongoose = require("mongoose");
const ratesSchema = require("./rates.model");
const commentsSchema = require("./comments.model");
const likesSchema = require("./likes.model");

const recipesSchema = new mongoose.Schema(
  {
    dishImg: { type: String },
    dishTitle: { type: String },
    dishInfo: { type: String },
    likes: [likesSchema],
    rates: [ratesSchema],
    comments: [commentsSchema],
    name: { type: String },
    profileImg: { type: String },
    autherEmail: { type: String },
  },
);

module.exports = recipesSchema;