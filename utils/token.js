var jwt = require('jsonwebtoken');

function generateToken(user) {

    return token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24
    });
}

module.exports = generateToken;