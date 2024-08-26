const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/user");

// Register new user
exports.Register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password:", hashedPassword.toString());
    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    // console.log("User saved:", user);
    console.log("Hashed Password (after save):", user.password);
    res.json({ message: "Registration successfully" });
  } catch (e) {
    next(e);
  }
};

// Login
exports.Login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });
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
  res.json({ message: `Welcome${req.user.username}` });
};
