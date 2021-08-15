
"use strict";

const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    userIds: { type: String },
    usersImg: { type: String },
    usersName: { type: String },
    commentText: { type: String },
  },
  { timestamps: true }
);

module.exports = commentsSchema;