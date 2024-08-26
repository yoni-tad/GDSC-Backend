const express = require('express')
const mongoose = require('mongoose')
const router = require('./router/router')
const bcrypt = require('bcrypt')
require('dotenv').config()
const app = express();

app.use(express.json());
app.use('/api', router);
app.use(express.static('../front-end'))

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("✅ MongoDB connected successfully.");

        await app.listen(8000, () => console.log("✅ Server start port at 8000")); 
    } catch(e) {
        console.error("❌ Server error:", e.message);
    }
})();
