"use strict";

const mongoose = require("mongoose");

const ratesSchema = new mongoose.Schema(
  {
    userIds: { type: [String] },
    rate: { type: [Number] },
  },
  { timestamps: true }
);

module.exports = ratesSchema;