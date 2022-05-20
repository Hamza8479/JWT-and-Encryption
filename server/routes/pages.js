const express = require("express");
const router = express.Router();

//import middlewares
const { middleware } = require("../middlewares/pages");

// import controller
const { register, login, companies } = require("../controllers/pages");

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
router.post("/signin", login);

// registration route
router.post("/signup", register);

// companies route
router.post("/companies", authenticateToken, companies);

function authenticateToken(req,res,next){
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(" ")[1];
   if(token == null) return res.sendStatus(401);

   jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
    if(err) return res.sendStatus(403)
    req.user = user;
    next();
   });
}

module.exports = router;
