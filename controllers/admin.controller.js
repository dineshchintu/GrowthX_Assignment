const Assignment = require('../models/assignment.model');
const User = require("../models/user.model")
const adminService = require("./../services/admin.service");
// View Assignments for Admin
exports.viewAssignments = async (req, res) => {
    try {
        if(req.user?.role!='Admin'){
            return res.status(401).json({message:"You are not a valid admin"});
        }
        const assignments = await adminService.viewAssignments(req.user._id);
        res.status(200).json({ assignments });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch assignments', error });
    }
};

// Accept Assignment
exports.acceptAssignment = async (req, res) => {
    try {
        if(req.user?.role!='Admin'){
            return res.status(401).json({message:"You are not a valid admin"});
        }
        const { id } = req.params;
        const assignment = await adminService.acceptAssignment(id,req.user._id);
        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }

        res.status(200).json({ message: 'Assignment accepted', assignment });
    } catch (error) {
        res.status(500).json({ message: 'Failed to accept assignment', error });
    }
};

// Reject Assignment
exports.rejectAssignment = async (req, res) => {
    try {
        if(req.user?.role!='Admin'){
            return res.status(401).json({message:"You are not a valid admin"});
        }
        const { id } = req.params;
        const assignment = await adminService.rejectAssignment(id,req.user._id);

        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }

        res.status(200).json({ message: 'Assignment rejected', assignment });
    } catch (error) {
        res.status(500).json({ message: 'Failed to reject assignment', error });
    }
};
