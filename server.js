const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
app.use(cors()) // after you initialize your express app instance
require('dotenv').config();const PORT = process.env.PORT;
app.use(express.json());
const MONGODB_CLINTE = process.env.MONGODB_CLINTE;
const mongoose = require("mongoose");
// const { seedUserData } = require("./models/users.model");

// const { addUser, getPage } = require("./controller/users.controller");


// const {
//   createComment,
//   updateComment,
//   deleteComment,
// } = require("./controller/comments.controller");

// seedUserData();
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////
// app.post("/user", addUser);

// app.post("/comment/:recipes_id", createComment);
// app.put("/comment/:comment_id", updateComment);
// app.delete("/comment/:comment_id", deleteComment);
/////////////////////////////////////////////////////////////////



app.get("/", function (req, res) {
  res.send("Welcome to the server of Heros Team");
});

app.listen(PORT);