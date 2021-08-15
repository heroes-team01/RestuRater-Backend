"use strict";

const mongoose = require("mongoose");

const pagesSchema = require("./pages.model");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    
    page: [pagesSchema],
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

const seedUserData = () => {
  const newUser = new userModel({
    email: "ayoub.alqeam@gmail.com",
    page: {
      name: "Ayyoub",
      viewsOfPage: 1,
      pageName: 'Ayooob',
      coverImg: "asmkdnjlhskjbakdbjkasbd",
      profileImg: "profileImg",
      info: "infoinfoinfoinfoinfoinfoinfo",
      
      recipes: {
        recipeId: 20,
        dishImg: "dishImg",
        dishTitle: "dishTitle",
        dishInfo: "dishInfo",
        likes: {
          userIds: ["sadsadsad", "sadasd2"],
        },
        rates: {
          userIds: ["sadsadsad", "sadasd2"],
          rate: [5, 4],
        },
        comments: {
          userIds: ["sadsadsad", "sadasd2"],
          commentText: ['hello', 'zatchy'],
        },
      },
    },
  });

  console.log(newUser);

  newUser.save();
};

module.exports = {
  userModel,
  seedUserData,
};