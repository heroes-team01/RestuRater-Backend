"use strict";

const { userModel } = require("../models/users.model");
const mongoose = require("mongoose");

const getPage = (request, response) => {
  const { email } = request.query;

  userModel.findOne({ email: email }, (error, data) => {
    if (error) {
      response.send(error);
    } else {
      data.page[0].viewsOfPage++;
      console.log(data.page[0].viewsOfPage);
      console.log("==============================");
      console.log(data);
      data.save();
      response.json(data.page[0]);
    }
  });
};
//
//////////////////////////////////////////////////////////////////////////////////
function newUser(email) {
  const user = new userModel({
    email: email,
    page: [
      {
        name: email, //defulte Name
        viewsOfPage: 0,
        pageName: email,
        coverImg:
          "https://images.unsplash.com/photo-1619526881542-c81baff85fa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        profileImg:
          "http://www.defineinternational.com/wp-content/uploads/2014/06/dummy-profile-300x300.png",
        info: "Edit Your Page !!",
        followersData: [],
        following: [],
        recipes: [
          {
            dishImg:
              "https://images.unsplash.com/photo-1506159904226-d6cfd457c30c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
            dishTitle: "Add Your Recipe",
            dishInfo: "Recipe Info !!",
            likes: [],
            rates: [],
            comments: [],
            autherEmail: email,
          },
        ],
      },
    ],
  });
  console.log(user);
  user.save();
  return user;
}
//////////////////////////////////////////////////////////////////////////////////

function addUser(req, res) {
  let { email } = req.body;

  userModel.find({ email: email }, (err, userData) => {
    if (err) {
      console.log("btata"); // console Delete
      res.send(err);
    } else {
      if (userData.length === 0) {
        console.log("bandora");
        console.log(email);
        const user = newUser(email);
        res.json(user);
      } else {
        console.log("khyar");
        res.json(userData[0]);
      }
    }
  });
}

//////////////////////////////////////////////////////////////////////////////////

module.exports = { addUser, getPage };