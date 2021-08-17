const mongoose = require('mongoose'); // mongoose package used to create the schema and generate the model


 // Step 1: Draw the schema on which the model will be generated!
 const userSchema = new mongoose.Schema({
   // Here are providing the fields (Property keys and their types) to our Collection Schema
   email: { type: String },
   rest_name: { type: String },
   rating_comment: { type: String },
   user_img: { type: String },
 });
 const usersSchema= new mongoose.Schema({
   userslist : {type:String},
   users: [userSchema],
 })
 
 const userModel = mongoose.model('reviews', userSchema);
 
 const usersModel = mongoose.model('usersS', usersSchema);

 const seedCollection = () => {
   try { 
     const firstuser = new usersModel({
       userslist:'users',
       users:[{
         email: "hebaalmomani1998@gmail.com",
         rest_name: "Mission Chinese Food",
         rating_comment: "great restarunt😍",
         user_img: './heba.jpg'
       }]
     });
     const seconduser = new userModel({
       email: "hebaalmomani1998@gmail.com",
       rest_name: "Emily",
       rating_comment: "This place is a blast",
       user_img: './heba.jpg'
     });
 
    
     firstuser.save();
     seconduser.save();
   } catch (error) {
     console.log("Error while creating the user: ", error.message)
   }
 };
 
 
 module.exports = {
   userModel,
   seedCollection,
   usersModel
 }