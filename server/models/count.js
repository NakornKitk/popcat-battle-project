const mongoose = require("mongoose")

const countSchema = mongoose.Schema({
    numCount:{
        type:Number
    }
})


module.exports = mongoose.model("count",countSchema)