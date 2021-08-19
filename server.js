
 const express = require('express');
 require('dotenv').config();
 const cors = require('cors');
 const app = express();
 const mongoose = require('mongoose');
 
 const PORT = process.env.PORT;
 const MONGO_DB_URL = process.env.MONGO_DB_URL;
 mongoose.connect(`${MONGO_DB_URL}/comments`, { useNewUrlParser: true, useUnifiedTopology: true });
 
 app.use(cors());
 app.use(express.json());
 const {
   getComments,
   creatComment,
   deleteComment,
   updateComment
 } = require('./controller/review.controller'); 
 const {getRest,deleteRest,addRest} = require("./controller/rest.controller")
 const { seedCommantsCollection } = require('./models/reviw.model');
 seedCommantsCollection();
 


 
// const {
//   getReview,
//   createReview,
//   deleteReview,
//   updateReviw,

// } = require('./controller/comments.controller');

// const { seedCollection } = require('./models/comments.model');
// seedCollection();




// mongoose.connect('mongodb://fav-books:hebaandleen@can-of-book-backend-shard-00-00.zqky4.mongodb.net:27017,can-of-book-backend-shard-00-01.zqky4.mongodb.net:27017,can-of-book-backend-shard-00-02.zqky4.mongodb.net:27017/food?ssl=true&replicaSet=atlas-dmraqr-shard-0&authSource=admin&retryWrites=true&w=majority',
// {useNewUrlParser: true, useUnifiedTopology: true});

/////////////////

const cat = new mongoose.Schema({
  title: String,
  address: String,
  description: String,
  type:String,
  image_url:String,
  
})
const Resturant = mongoose.model('cat', cat);


app.get('/allresturant', (req , res) => {
  Resturant.find({},(error,result) => {
    if (!error ){
      console.log(result)
      res.send(result)
    }else{
      console.log('error')
      res.send(error.message)
    }
  })
})



// app.get('/reviews', getReview); // Read Operation
// app.post('/review', createReview); // This endpoint is only responsible for handling requests that will create new cats
// app.delete('/review/:review_id', deleteReview);
// app.put('/review/:review_id', updateReviw);
app.get('/allrest', getRest); // Read Operation
app.delete('/deleteRest/:restId', deleteRest); // Read Operation
app.post('/addrest', addRest); // 

 app.get('/comments', getComments);
 app.post('/com', creatComment); 
 app.delete('/com/:com_id', deleteComment);
 app.put('/com/:com_id', updateComment);
 
 app.listen(PORT, () => {
   console.log(`Server started on ${PORT}`);
 });