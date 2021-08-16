const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT;
// const axios = require('axios');
app.use(express.json());
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const mongoose = require("mongoose");
// const { seedUserData } = require("./models/users.model");

const { addUser, getPage } = require("./controller/users.controller");
const updatepage = require("./controller/pages.controller");


// const { handelFollow } = require("./controller/follow.controller");
const {
  createComment,
  updateComment,
  deleteComment,
} = require("./controller/comments.controller");
const { createLike, deleteLike } = require("./controller/likes.controller");
// seedUserData();
//////////////////////////////////////////////////////////////////////////////////

mongoose.connect(`${MONGO_DB_URL}/user`, {
  useNewUrlParser: true, useUnifiedTopology: true
});
//////////////////////////////////////////////////////////////////////////////////
app.post("/user", addUser);
// Recipes
// app.get("/recipes", getRecipes);
// app.post("/recipe", createRecipe);
// app.delete("/recipe/:recipes_id", deleteRecipe);
// app.put("/recipe/:recipes_id", updateRecipe);
//////////////////////////////////////////////////////////////////////////////////
app.post("/comment/:recipes_id", createComment);
app.put("/comment/:comment_id", updateComment);
app.delete("/comment/:comment_id", deleteComment);
/////////////////////////////////////////////////////////////////
app.post("/like/:recipes_id", createLike);
app.delete("/like/:like_id", deleteLike);
////////////////////////////////

app.get("/page", getPage);
app.put("/page", updatepage);


app.get("/", function (req, res) {
  res.send("Welcome to the server of Flavors 101");
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
