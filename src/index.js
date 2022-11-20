const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/routes");

app.use(bodyparser.json()); //👈ConvertObject to JSON Form

//***********************[🔗MongoDB & Node.JS Connected🔗]***********************//
mongoose
  .connect(
    "mongodb+srv://Dharmendra:dkyadav123@cluster0.kq9bu.mongodb.net/Open-to-Internship",
    {
      useNewUrlParser: true,
    }
  )
  .then((result) => console.log("Hello Mr Dkyadav MongoDb is connected 👌"))
  .catch((err) => console.log(err));

//**************************[👇It is Global Api's👇]*****************************//
app.use("/", router);

//******************************[👇Port Created👇]*******************************//
app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port 🏃 " + (process.env.PORT || 3000));
});

//👌👌👌👌👌👌👌👌[Thank You Mr Dkyadav Index-File End]👌👌👌👌👌👌👌👌👌//
