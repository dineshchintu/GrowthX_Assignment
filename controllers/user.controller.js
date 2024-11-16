const Assignment = require('../models/assignment.model');
const User = require("../models/user.model")
// Upload Assignment
exports.uploadAssignment = async (req, res) => {
    try {
        if(req.user?.role!='User'){
            return res.status(401).json({message:"You are not a valid user"});
        }
        const { task, adminId } = req.body;

        const assignment = new Assignment({
            userId: req.user._id,
            adminId,
            task
        });

        await assignment.save();
        res.status(201).json({ message: 'Assignment uploaded successfully', assignment });
    } catch (error) {
        res.status(500).json({ message: 'Failed to upload assignment', error });
    }
};

// Fetch All Admins
exports.getAllAdmins = async (req, res) => {
    try {
        if(req.user?.role!='User'){
            return res.status(401).json({message:"You are not a valid user"});
        }
        const admins = await User.find({ role: 'Admin' });
        res.status(200).json({ admins });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
