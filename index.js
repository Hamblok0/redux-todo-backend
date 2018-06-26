var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    User = require('./models/userModel');

var app = express();
var port = process.env.PORT || 3000;
var db = mongoose.connect('mongodb://localhost/reduxTodoApi')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

userRouter = require('./routes/users')(User);

app.use('/api/users', userRouter);

app.get('/', function(req,res) {
    res.send('redux todo backend API')
});

app.listen(port, function(){
    console.log("Running on PORT: " + port)
});

module.exports = app;