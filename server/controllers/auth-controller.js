//home logic
const bcrypt = require("bcryptjs");
const User = require("../models/user-model");

const home = async (req, res) => {
    try {
        res.status(200).send("router3 controller");
    } catch (error) {
        console.log(error);
    }
};
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userexist = await User.findOne({ email });
        if (userexist) {
            return res.status(400).json({ msg: "email alredy exists" });
        }

        //hash the passwd
        const saltRound = 5;
        const hash_password = await bcrypt.hash(password, saltRound);
        const userCreated = await User.create({
            username,
            email,
            phone,
            password: hash_password,
        });

        console.log(req.body);
        res.status(200).json({ msg: userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString(),});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const passwordMatch = await bcrypt.compare(password, userExist.password);
        if (passwordMatch) {
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

//to send user data
const user = async(req,res) =>{

try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ msg: userData });
} catch (error) {
    console.log(`error from user route ${error}`);
}



};










module.exports = { home, register, login, user };