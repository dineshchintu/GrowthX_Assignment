const authMiddleware = require("./../middleware/auth");
const adminController = require("./../controllers/admin.controller");
const express = require("express");
const router = express.Router();
router.post("/assignments/:id/accept",authMiddleware,adminController.acceptAssignment);
router.post("/assignments/:id/reject",authMiddleware,adminController.rejectAssignment);
router.get("/assignments",authMiddleware,adminController.viewAssignments);
module.exports = router;