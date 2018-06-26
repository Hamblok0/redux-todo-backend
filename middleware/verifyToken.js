var jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(403).send('Token does not exist');
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (err) {
            return res.status(500).send('Failed to authenticate token')
        }

        req.userId = decoded._id;
        next();
    })
}

module.exports = verifyToken;