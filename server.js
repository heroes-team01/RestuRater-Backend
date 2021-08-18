
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
 
 const { seedCommantsCollection } = require('./models/reviw.model');
 seedCommantsCollection();
 
 app.get('/comments', getComments);
 app.post('/com', creatComment); 
 app.delete('/com/:com_id', deleteComment);
 app.put('/com/:com_id', updateComment);
 
 app.listen(PORT, () => {
   console.log(`Server started on ${PORT}`);
 });