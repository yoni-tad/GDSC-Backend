const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(404).json({ message: "Authentication required" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decodedToken.userId);
    if(!user) {
        return res.status(404).json({message: "User not found"});
    }
    req.user = user;
    next();
  } catch(e) {
    res.status(404).json({message: 'Invalid token'})
  }
};
