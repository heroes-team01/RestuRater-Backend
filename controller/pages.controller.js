"use strict";

const { pagesSchema } = require("../models/pages.model");
const mongoose = require("mongoose");

//////////////////////////////////////////////////////////////////////////////////
const { userModel } = require("../models/users.model");

const updatepage = (request, response) => {
  //   const pageIndex = request.params.page_idx;
  const {
    email,
    name,
    pageName,
    coverImg,
    profileImg,
    info,
  } = request.body;
  userModel.findOne({ email: email }, (error, userData) => {
    console.log(userData);
    if (error) {
      response.send(error);
    } else {
      console.log(request.body);
      userData.page.splice(0, 1, {
        _id: userData.page[0]._id,
        name: name,
        pageName: pageName,
        coverImg: coverImg,
        profileImg: profileImg,
        info: info,
        recipes: userData.page[0].recipes,
        viewsOfPage: userData.page[0].viewsOfPage,
        followersData: userData.page[0].followersData,
        following: userData.page[0].following,
      });
      userData.save();
      response.send(userData);
    }
  });
};

//////////////////////////////////////////////////////////////////////////////////
module.exports = updatepage;