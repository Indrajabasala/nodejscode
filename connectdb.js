const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri = "mongodb://localhost:27017/newconnection";

async function connect() {
  debugger;
  try {
    await mongoose.connect(uri);
    console.log("db connected");
  } catch (error) {
    console.log("error while connecting ");
  }
}

connect();

// mongoose
//   .connect("mongodb://localhost:27017", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//   })
//   .then((res) => {
//     console.log("bd connected");
//   })
//   .catch((err) => {
//     console.log("error while connceting");
//   });

app.listen(8000, () => {
  console.log("its running");
});
