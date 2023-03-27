const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("home router activated");
  //   res.send("<h1>Home router</h1>");
  //   res.sendFile(path.join(__dirname, "../", "views", "home.html"));
  //static path
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;
