"use strict";

const { userModel } = require("../models/users.model");
//////////////////////////////////////////////////////////////////////////////////
// get recipes
const getRecipes = (request, response) => {
  const { email } = request.query;

  userModel.findOne({ email: email }, (error, data) => {
    if (error) {
      response.send(error);
    } else {
      response.json(data);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////
// Create Recipes
const createRecipe = (request, response) => {
  const { email, dishImg, dishTitle, dishInfo } = request.body;

  userModel.findOne({ email: email }, (error, data) => {
    if (error) {
      response.send(error);
    } else {
      data.page[0].recipes.push({
        dishImg: dishImg,
        dishTitle: dishTitle,
        dishInfo: dishInfo,
        likes: [],
        rates: [],
        comments: [],
        name: data.page[0].name,
        profileImg: data.page[0].profileImg,
        autherEmail: data.email,
      });
      data.save();
      response.json(data);
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////
// Delete Recipes
const deleteRecipe = (request, response) => {
  const recipesId = request.params.recipes_id;
  const { email } = request.query;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      for (let index = 0; index < userData.page[0].recipes.length; index++) {
        if (recipesId === userData.page[0].recipes[index]._id.toString()) {
          userData.page[0].recipes.splice(index, 1);
          userData.save();
          response.send(userData);
          console.log("index :", index);
          break;
        }
        console.log(index);
      }
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////
// Update Recipes
const updateRecipe = (request, response) => {
  const recipesId = request.params.recipes_id;
  const { email, dishImg, dishTitle, dishInfo } = request.body;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      for (let index = 0; index < userData.page[0].recipes.length; index++) {
        if (recipesId === userData.page[0].recipes[index]._id.toString()) {
          userData.page[0].recipes.splice(index, 1, {
            _id: userData.page[0].recipes[index]._id,
            dishImg: dishImg,
            dishTitle: dishTitle,
            dishInfo: dishInfo,
            likes: userData.page[0].recipes[index].likes,
            rates: userData.page[0].recipes[index].rates,
            comments: userData.page[0].recipes[index].comments,
            name: userData.page[0].name,
            profileImg: userData.page[0].profileImg,
            autherEmail: userData.email,
          });
          userData.save();
          response.send(userData);
          console.log("index :", index);
          break;
        }
        console.log(index);
      }
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////

module.exports = {
  getRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe,
};