"use strict";

const { userModel } = require("../models/users.model");

const createComment = (request, response) => {
  const recipesId = request.params.recipes_id;
  const { email, commenterEmail, commenterImg, commenter, comment } =
    request.body;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      console.log(userData);
      for (let index = 0; index < userData.page[0].recipes.length; index++) {
        if (recipesId === userData.page[0].recipes[index]._id.toString()) {
          console.log("I AM IN >>>>>>>>>>>>>>>");

          userData.page[0].recipes[index].comments.push({
            userIds: commenterEmail,
            usersImg: commenterImg,
            usersName: commenter,
            commentText: comment,
          });

          userData.save();
          response.json(userData);
          console.log(">>>>>>>>>>", index);
          break;
        }
        console.log(index);
      }
    }
  });
};

const updateComment = (request, response) => {
  const commentId = request.params.comment_id;
  const { email, commenterEmail, commenterImg, commenter, comment, recipesId } =
    request.body;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      console.log(userData);
      for (let index = 0; index < userData.page[0].recipes.length; index++) {
        if (recipesId === userData.page[0].recipes[index]._id.toString()) {
          for (
            let j = 0;
            j < userData.page[0].recipes[index].comments.length;
            j++
          ) {
            console.log("<<<<<<<<<<<<<I AM IN  111111>>>>>>>>>>>>>>>");
            if (
              commentId ===
              userData.page[0].recipes[index].comments[j]._id.toString()
            ) {
            console.log("<<<<<<<<<<<<<I AM IN  2222222>>>>>>>>>>>>>>>");

              userData.page[0].recipes[index].comments.splice(j, 1, {
                _id: userData.page[0].recipes[index].comments[j]._id,
                userIds: commenterEmail,
                usersImg: commenterImg,
                usersName: commenter,
                commentText: comment,
              });

              userData.save();
              response.json(userData);
              console.log(">>>>>>>>>>", index);
              break;
            }
          }
          break;
        }
        console.log(index);
      }
    }
  });
};

const deleteComment = (request, response) => {
  const commentId = request.params.comment_id;
  const { email, recipesId } =
    request.body;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      console.log(userData);
      for (let index = 0; index < userData.page[0].recipes.length; index++) {
        if (recipesId === userData.page[0].recipes[index]._id.toString()) {
          for (
            let j = 0;
            j < userData.page[0].recipes[index].comments.length;
            j++
          ) {
            console.log("<<<<<<<<<<<<<I AM IN  Delete 1>>>>>>>>>>>>>>>");
            if (
              commentId ===
              userData.page[0].recipes[index].comments[j]._id.toString()
            ) {
              console.log("<<<<<<<<<<<<<I AM IN  Delete>>>>>>>>>>>>>>>");

              userData.page[0].recipes[index].comments.splice(j, 1);

              userData.save();
              response.json(userData);
              console.log(">>>>>>>>>>", index);
              break;
            }
          }
          break;
        }
      }
    }
  });
};


module.exports = {
  createComment,
  updateComment,
  deleteComment,
};