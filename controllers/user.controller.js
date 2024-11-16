const Assignment = require('../models/assignment.model');
const User = require("../models/user.model")
const userService = require("./../services/user.service");
// Upload Assignment
exports.uploadAssignment = async (req, res) => {
    try {
        if(req.user?.role!='User'){
            return res.status(401).json({message:"You are not a valid user"});
        }
        const { task, adminId } = req.body;
        const assignment = await userService.uploadAssignment({userId:req.user._id, task, adminId });
        res.status(201).json({ message: 'Assignment uploaded successfully', assignment });
    } catch (error) {
        res.status(500).json({ message: 'Failed to upload assignment '+error.message  });
    }
};

// Fetch All Admins
exports.getAllAdmins = async (req, res) => {
    try {
        if(req.user?.role!='User'){
            return res.status(401).json({message:"You are not a valid user"});
        }
        const admins = await userService.getAllAdmins();
        res.status(200).json({ admins });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
