const slugify = require("slugify")
const userModel = require('../models/user')
const { v4: uuidv4 } = require('uuid')





exports.gettoptenleader = async (req, res) => {
    userModel.find({}).sort({ clicks: -1 }).limit(10).exec()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json({ error: err })
        })
}


exports.gethighestleader = async (req, res) => {
    userModel.find({}).sort({ clicks: -1 }).limit(1).exec()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json({ error: err })
        })
}


exports.getuser = (req, res) => {
    const { slug } = req.params
    userModel.findOne({ slug }).exec()
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json({ error: err })
        })
}


exports.create = async (req, res) => {
    const { name, password } = req.body
    let slug = slugify(name)

    if (!slug) slug = uuidv4();

    switch (true) {
        case !name:
            return res.status(400).json({ error: "Please insert username" });
            break;
        case !password:
            return res.status(400).json({ error: "Please insert password" });
    }

    userModel.create({ name, password, slug })
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.status(400).json({ error: err })
        })
        
}


exports.add = async (req, res) => {
    const { slug } = req.params
    userModel.findOneAndUpdate({ slug }, { $inc: { clicks: 1 } }, { new: true }).exec()
        .then(() => {
            res.json({
                message: "data already update"
            })
        })
        .catch((err) => {
            res.status(400).json({ error: err })
        })
}

