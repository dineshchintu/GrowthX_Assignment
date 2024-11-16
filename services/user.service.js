const Assignment = require('../models/assignment.model');
const User = require("../models/user.model")

exports.uploadAssignment = async({userId,adminId,task})=>{
        const assignment = new Assignment({
            userId,
            adminId,
            task
        });

        await assignment.save();
        return assignment;
}

exports.getAllAdmins = async()=>{
    return await User.find({ role: 'Admin' });
}