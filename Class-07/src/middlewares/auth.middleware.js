const jwt = require('jsonwebtoken');
const _config = require('../../config/config');

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, _config.JWT_SECRET)

    req.user = decoded;
    next();
}

module.exports = authMiddleware;