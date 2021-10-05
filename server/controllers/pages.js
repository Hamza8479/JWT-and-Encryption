const User = require("../models/user");

// user create if email doesnt exist
// with async await
//register
exports.register = async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
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
      const user = new User({ name, email, phone, work, password, cpassword });
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

    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      res.status(400).json({ err: "User Not Found" });
    } else {
      res.json(userLogin);
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
