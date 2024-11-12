const mongoose = require("mongoose")
const slugify = require("slugify")

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            unique:true,
            required:true
        },
        password: {
            type: String,
            required:true
        },
        clicks:{
            type: Number,
            default:0
        },
        slug:{
            type: String,
            lowercase:true,
            unique:true
        }
    }, {timestamps:true}
)


module.exports = mongoose.model("users",userSchema)