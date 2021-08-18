const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

const mongoose = require('mongoose');

const {
  getReview,
  createReview,
  deleteReview,
  updateReviw
} = require('./controller/comments.controller');

const { seedCollection } = require('./models/comments.model');
// seedCollection();




mongoose.connect('mongodb://fav-books:hebaandleen@can-of-book-backend-shard-00-00.zqky4.mongodb.net:27017,can-of-book-backend-shard-00-01.zqky4.mongodb.net:27017,can-of-book-backend-shard-00-02.zqky4.mongodb.net:27017/food?ssl=true&replicaSet=atlas-dmraqr-shard-0&authSource=admin&retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true});

/////////////////

// const Kitten = new mongoose.Schema({
//   title: String,
//   address: String,
//   description: String,
//   type:String,
//   image_url:String,
  
// })
// const Resturant = mongoose.model('Kitten', Kitten);


// app.get('/allresturant', (req , res) => {
//   Resturant.find({},(error,result) => {
//     if (!error ){
//       console.log(result)
//       res.send(result)
//     }else{
//       console.log('error')
//       res.send(error.message)
//     }
//   })
// })

// function seedData() {
//   const resturant = new Resturant({ 
//     title: 'Silence',
//     address: 'address',
//    });

//    const resturant2 = new Resturant({ 
//     title: 'Silenwce',
//     address: 'addrwess',
//    });

//    resturant.save()
//    resturant2.save()
// }

// // seedData()

app.get('/reviews', getReview); // Read Operation
app.post('/review', createReview); // This endpoint is only responsible for handling requests that will create new cats
app.delete('/review/:review_id', deleteReview);
app.put('/review/:review_id', updateReviw);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
