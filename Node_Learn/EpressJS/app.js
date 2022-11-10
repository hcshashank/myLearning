// mongodb+srv://college:<password>@cluster0.see6trg.mongodb.net/?retryWrites=true&w=majority

const express = require("express");
const mongoose = require('mongoose')

const app = express();
// app.set("view engine", "ejs");
mongoose.connect('mongodb+srv://shawshank:Test123@mycluster.maogwui.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser : true,
useUnifiedTopology: true });

app.listen(3000);

app.get("/", (req, res) => {
  // res.send("<h1>Hello Express Js</h1>");
  // res.sendFile('./index.html', {root:__dirname})
  const blogs = [
    {title: 'yoshi Finds eggs', snippes: "this is first snippet"},
    {title: 'mario Findss snackes', snippes: "this is second snippet"},
    {title: 'how to defeat browser', snippes: "this is third snippet"}
  ]
  res.render("index", { title: "Home",blogs  });
});

app.get("/about", (req, res) => {
  // res.send("<h1>Hello About page of Express Js</h1>");
  // res.sendFile('./about.html', {root:__dirname})
  res.render("about", { title: "About" });
});
app.get("/blogs/create", (req, res) => {
  // res.send("<h1>Hello About page of Express Js</h1>");
  // res.sendFile('./about.html', {root:__dirname})
  res.render("create", { title: "New Blog" });
});

app.use((req, res) => {
  // res.sendFile('./404.html', {root:__dirname})
  res.render("404");
});
