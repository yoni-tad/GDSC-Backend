const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (e) {
    return next(e);
  }
});

// userSchema.methods.comparePassword = async function (password) {
//     console.log(password)
//     console.log(this.password)
//     return bcrypt.compare(password, this.password);
// }

userSchema.methods.comparePassword = async function (password) {
    console.log("Input Password:", password);
    console.log("Hashed Password from DB:", this.password);
    return bcrypt.compare(password, this.password);
  };


module.exports = mongoose.model("User", userSchema);
