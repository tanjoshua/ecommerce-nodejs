const express = require("express");
const path = require("path");

// create routes
const router = express.Router();

router.get("/", (req, res, next) => {
  //__dirnames gives the path to the directory of the file, join gives us the right path based on OS
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
