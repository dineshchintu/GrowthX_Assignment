const express = require("express");
const authRoutes = require("./auth.route.js");
const userRoutes = require("./user.route.js");
const adminRoutes = require("./admin.route.js");
const router = express.Router();
router.use("/auth",authRoutes);
router.use("/user",userRoutes);
router.use("/admin",adminRoutes);
module.exports = router;