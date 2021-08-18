
 const { commentModel } = require('../models/reviw.model'); 

 const getComments = async (req, res) => {
   const { email } = req.query;
   
   commentModel.find({ email: email }, (err, user) => {
 
     if (user === null) {
       res.send('no data was found');
     } else {
       res.json(user);
     }
   });
 
 }
 
 const creatComment = async (req, res) => {
   console.log("=======");
   const {
     email,
     res_name,
       review
   } = req.body;
 

   const newComObj = new commentModel({
     email: email,
     res_name: res_name,
     
     review
   });
   newComObj.save();
 
   res.json(newComObj);
 }
 
 const deleteComment = async (req, res) => {

    const comId = req.params.com_id;
 
   commentModel.deleteOne({ _id: comId }, (error, deleted) => {
     res.send(deleted);
   });
 
 }
 
 
 const updateComment = async (req, res) => {
 
   const comId = req.params.com_id; 
 
   const {
    res_name,review
   } = req.body;
   
   commentModel.findByIdAndUpdate(
     { _id: comId },
     {
       res_name: res_name,
       review: review
     },
     { new: true },
     (err, data) => {
       res.json(data);
     }
   )
 
 }
 
 module.exports = {
   getComments,
   creatComment,
   deleteComment,
   updateComment
 }