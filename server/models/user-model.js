const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

username: {
    type: String,
    require: true,
},
email: {
    type: String,
    require: true,
},

phone: {
    type: String,
    require: true,
},
password: {
    type: String,
    require: true,
},
isAdmin: {
    type: Boolean,
    default: false,
},






});

// JWT 
userSchema.methods.generateToken = async function () {
try {
    return jwt.sign({
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
    },
    process.env.JWT_kEY,{
        expiresIn: "300d"
    }
);

    
} catch (error) {
    console.log(error);
}

};

//define mode or collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;
