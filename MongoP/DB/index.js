const mongoose = require("mongoose");
// write the logic to connect to the database from .env file
// const dotenv = require("dotenv");    
mongoose.connect("")


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCouses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
    ]
});

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrl: String,
    price: Number

});


const User = mongoose.model('users',userSchema);
const Admin = mongoose.model('admins',adminSchema);
const Course = mongoose.model('courses',courseSchema);

module.exports = {
    User,
    Admin,
    Course
}
