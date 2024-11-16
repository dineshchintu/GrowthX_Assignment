const jwt = require('jsonwebtoken');
const User = require('./../models/user.model'); // Adjust the path as per your structure

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id, role: decoded.role });

        if (!user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = user; // Attach user to the request object
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed' });
    }
};

module.exports = authMiddleware;
