const express = require("express");
const coursesRouter = require("./routes/courses");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use("/c", coursesRouter);
mongoose.connect(process.env.MONGO_URI, ()=>{
    console.log('connect to Mongoose')
})
app.listen(process.env.PORT, () => {
  console.log("server is running");
});
