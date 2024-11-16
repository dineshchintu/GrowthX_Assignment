const Assignment = require('../models/assignment.model');

exports.viewAssignments = async(adminId)=>{
    const assignments = await Assignment.find({ adminId})
            .populate('userId', 'username')
            .sort({ createdAt: -1 });
}

exports.acceptAssignment = async(assignmentId,adminId)=>{
    const assignment = await Assignment.findOneAndUpdate(
        { _id: assignmentId, adminId: adminId },
        { status: 'Accepted' },
        { new: true }
    );
    return assignment;
}

exports.rejectAssignment = async(assignmentId,adminId)=>{
        const assignment = await Assignment.findOneAndUpdate(
        { _id: assignmentId, adminId: adminId },
        { status: 'Rejected' },
        { new: true }
    );
    return assignment;
}