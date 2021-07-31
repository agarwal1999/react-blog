require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));


app.listen("5000", ()=>{
  console.log("Backend is running")
})