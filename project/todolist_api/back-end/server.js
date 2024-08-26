const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const env = require("dotenv");
const router = require("./router/api");
const app = express();
env.config();

const coreOptions = {
  origin: "*",
  Credential: true,
  optionSuccessStatus: 200,
};

app.use(cors(coreOptions));
app.use(express.json());
app.use("/api", router);
app.use(express.static("../front-end"));

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected successfully.");

    await app.listen(3000, () => console.log("✅ Server start port at 3000"));
  } catch (e) {
    console.error("❌ Server error:", e.message);
  }
})();
