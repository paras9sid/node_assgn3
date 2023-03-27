const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const userRoute = require("./routes/user");
const homeRoute = require("./routes/home");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoute);
app.use(homeRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000);
console.log("server running");
