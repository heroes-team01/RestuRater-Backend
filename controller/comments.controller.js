const { userModel } = require('../models/comments.model'); // the userModel that we will use to get the users data from

 const getReview = async (req, res) => {
   const { email } = req.query; // we are getting the email from the query parameter
 
  
   userModel.find({ email: email }, (err, userComment) => {
 
     if (userComment === null) {
       res.send('no review was found');
     } else {
       res.json(userComment);
     }
   });
 
 }
 
 const createReview = async (req, res) => {

   const {
    email,
    rest_name,
    rating_comment,
    user_img,
   } = req.body;
 
   // create the new review 
   const nemComment = new userModel({
     email: email,
     rest_name: rest_name,
     rating_comment,
     user_img
   });
   nemComment.save();
 
   res.json(nemComment);
 }
 

 const deleteReview = async (req, res) => {
   const reviewId = req.params.review_id;
 
   userModel.deleteOne({ _id: reviewId }, (error, deleted) => {
     res.send(deleted);
   });
 
 }
 
 

 
 const updateReviw = async (req, res) => {
 
   const reviewId = req.params.review_id; 
 
   const {
    rest_name,
    rating_comment,
    user_img
   } = req.body;
 
   
   userModel.findByIdAndUpdate(
     { _id: reviewId }, // the id of the item we want to find
     {
      rest_name: rest_name,
      rating_comment: rating_comment,
      user_img: user_img
     },
     { new: true }, 
     (err, data) => {
       res.json(data);
     }
   )
 
 }
 
 module.exports = {
   getReview,
   createReview,
   deleteReview,
   updateReviw
 }