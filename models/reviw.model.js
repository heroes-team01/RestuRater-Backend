
 const mongoose = require('mongoose'); 
 const commentSchema = new mongoose.Schema({
   email: { type: String },
   res_name: { type: String },
   review: { type: String },
 });
 
  
 const commentModel = mongoose.model('comments', commentSchema);
 
 const seedCommantsCollection = () => {
   try { 
     const firstcommnet = new commentModel({
       email: "Amneh99el@gmail.com",
       res_name: "pizza",
       review: "love it",
     });
     const secondcommnet = new commentModel({
       email: "Amneh99el@gmail.com",
       res_name: "boogie",
       review: "Calico",
     });
     
     console.log(firstcommnet);
     firstcommnet.save();
     secondcommnet.save();
     

   } catch (error) {
     console.log("Error while creating the user: ", error.message)
   }
 };
 
 
 module.exports = {
   commentModel,
   seedCommantsCollection
 }