var express = require('express'),
    bcrypt = require('bcrypt'),
    generateToken = require('../utils/token');

var routes = function(User) {
    var userRouter = express.Router();

    userRouter.route('/signup')
        .post(function(req,res) {
            var hash = bcrypt.hashSync(req.body.password.trim(), 10);

            User.create({
                email: req.body.email,
                password: hash
            },
            function (err, user) {
                if (err) return res.status(500).send(err)

                var token = generateToken(user);
                console.log({user: user, token: token})
                res.status(200).send({user: user, token: token})
            });
        });
    
    userRouter.route('/signin')
        .post(function(req,res) {
            User.findOne({ email: req.body.email }, function (err, user) {
                if (err) return res.status(500).send(err);

                var validatePword = bcrypt.compareSync(req.body.password, user.password);
                if (!user || !validatePword) {
                    return res.status(404).send("Email or password invalid");
                } else {
                    var token = generateToken(user);
                    return res.status(200).send({user: user, token: token});
                }
            })
        })

    return userRouter
};

module.exports = routes;