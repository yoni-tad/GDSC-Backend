const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

// Register new user
exports.Register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const checkEmail = await User.findOne({email: email})
    if(checkEmail) {
      return res.status(409).json({message: "This email already used"})
    }

    const user = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });
    res.status(201).json({ message: "Registration successfully" });
  } catch (e) {
    next(e);
  }
};

// Login
exports.Login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1 hour",
    });

    res.json(token);
  } catch (e) {
    next(e);
  }
};

// Profile
exports.Profile = async (req, res) => {
  res.json({
    message: `Welcome ${req.user.firstName}`,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
  });
};
