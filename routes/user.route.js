const authMiddleware = require("./../middleware/auth");
const userController = require("./../controllers/user.controller");
const express = require("express");
const router = express.Router();
router.post("/upload",authMiddleware,userController.uploadAssignment);
router.get("/admins",authMiddleware,userController.getAllAdmins);
module.exports = router;