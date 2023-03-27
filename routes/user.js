const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/users", (req, res, next) => {
  console.log("user route act");
  //   res.send("<h3>Users routes</h3>");
  //   res.sendFile(path.join(__dirname, "../", "views", "user.html"));
  //static path
  res.sendFile(path.join(rootDir, "views", "user.html"));
});

module.exports = router;
