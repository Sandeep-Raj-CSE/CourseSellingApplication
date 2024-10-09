const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,  // Change 'typeof' to 'type'
        required: true // Optionally add validation rules
    },
    lastName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true // Ensure emails are unique
    },
    password: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("User", userSchema); // Use Pascal case for the model name

module.exports = userModel;
