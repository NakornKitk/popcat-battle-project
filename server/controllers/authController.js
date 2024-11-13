const jwt = require("jsonwebtoken")
const {expressjwt: JWT} = require("express-jwt")
const slugify = require("slugify")
const userModel = require('../models/user')
const { v4: uuidv4 } = require('uuid')



exports.login = async (req,res) => {
    const { name, password } = req.body;
    let slug = slugify(name);
    if (!slug) slug = uuidv4();

    if (!name) {
        return res.status(400).json({ error: "Please insert username" });
    }
    if (!password) {
        return res.status(400).json({ error: "Please insert password" });
    }

    try {
        const user = await userModel.findOne({ slug }).exec();
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        if (name != user.name) {
            return res.status(401).json({ error: "Incorrect username" });
        }
        if (password != user.password) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        const token = jwt.sign({name},process.env.JWT_SECRET,{expiresIn:"1d"})
        return res.json({token,name})
        
    } catch (err) {
        res.status(500).json({ error: "Server error, please try again later" });
    }
   
}

// middleware
exports.requireLogin= JWT({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth"
})