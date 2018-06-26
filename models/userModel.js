var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


userSchema = Schema({
    email: {type: String},
    password: {type: String},
    createdAt: {type: Date, default: Date.now},
    todos: {type: Array, default: []}
})

module.exports = mongoose.model('User', userSchema)