const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// user create if email doesnt exist
// with async await
//register
exports.register = async (req, res) => {
  const { name, email, phone, work, role, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !role || !password || !cpassword) {
    return res
      .status(422)
      .json({ err: "Please fill out all the given fields!" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ err: "Email already exist" });
    } else if (password !== cpassword) {
      return res.status(422).json({ err: "possword doesnt match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        role,
        work,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json({ message: "User Registered Successfully." });
    }

    // const userRegister = await user.save();
    // if (userRegister) {
    //   res.status(201).json({ message: "User Registered Successfully." });
    // } else {
    //   res.status(500).json({ error: "User Registration Failed." });
    // }
  } catch (err) {
    console.log(err);
  }
};

//login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Invalid details" });
    }
    // console.log(email, password);

    const userLogin = await User.findOne({ email });
    console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      //   const token = await userLogin.generateAuthToken();
      //   console.log("jwt---->", token);
      let token = jwt.sign({ id: userLogin._id }, process.env.SECRET_KEY);
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 3800000),
        httpOnly: true,
      });
      console.log(token);

      if (!isMatch) {
        res.status(400).json({ err: "Password doesnt match" });
      } else {
        res.json({
          data: "User signin successfully",
          authToken: token,
          userLogin,
        });
      }
    } else {
      res.status(400).json({ err: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
};

// user create if email doesnt exist
// without async await
// exports.create = (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res
//       .status(422)
//       .json({ err: "Please fill out all the given fields!" });
//   }

//   return User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ err: "Email already exist" });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword })
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User Registered Successfully." });
//         })
//         .catch((err) => {
//           return res.status(500).json({ error: "User Registration Failed." });
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// const user = new User(req.body);
// console.log(name);
// console.log(email);

// res.json({
//   msg: "My Signup Api",
//   data: req.body,
// });
