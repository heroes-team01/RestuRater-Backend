const { userModel,usersModel } = require('../models/comments.model'); // the userModel that we will use to get the users data from

 const getReview = async (req, res) => {
   const { email } = req.query; // we are getting the email from the query parameter

  
   usersModel.find({ userslist: 'users' }, (err, userComment) => {
   
    if(err){
      res.send('no review was found');
    }else{
      let selecteduser = userComment[0].users.filter(user=>{
        if(user.email==email){
          return user;

        }

      })
      // console.log('test'+ selecteduser[0]);

      res.send(selecteduser);
    }
    //  if (userComment === null) {
    //   console.log('error');
    //    res.send('no review was found');
    //  } else {
    //   console.log('else');
    //    console.log(userComment[0]);
    //    res.json(userComment[0]);

    //  }
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
 
   const reviewId = Number(req.params.review_id); 
 
   const {
    rest_name,
    rating_comment,
    user_img
   } = req.body;
 
   usersModel.find({ userslist: 'users' }, (err, userComment) => {
    if(err){
      res.send('no review was found');
    }else{
userComment[0].users.splice(reviewId,1,{
  rest_name: rest_name,
    rating_comment :rating_comment,
    user_img:user_img,
})
userComment[0].save()
res.send(userComment[0].users)
      }
  })
  //  userModel.findByIdAndUpdate(
  //    { _id: reviewId }, // the id of the item we want to find
  //    {
  //     rest_name: rest_name,
  //     rating_comment: rating_comment,
  //     user_img: user_img
  //    },
  //    { new: true }, 
  //    (err, data) => {
  //      console.log(data);
  //      res.json(data);
  //    }
  //  )
 
 }
 
 module.exports = {
   getReview,
   createReview,
   deleteReview,
   updateReviw
 }