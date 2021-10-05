const express = require("express");
const router = express.Router();

//import middlewares
const { middleware } = require("../middlewares/pages");

// import controller
const { register, login } = require("../controllers/pages");

router.get("", (req, res) => {
  res.json({
    data: "Hello world from ther server",
  });
});

router.get("/about", middleware, (req, res) => {
  res.json({
    data: "Hello about World from the server",
  });
});

router.get("/contact", (req, res) => {
  res.json({
    data: "Hello contact World from the server",
  });
});

// login route
router.get("/signin", login);

// registration route
router.post("/signup", register);

module.exports = router;
