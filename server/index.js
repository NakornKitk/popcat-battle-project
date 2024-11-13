const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const cors=require("cors");
const userRoute = require('./routes/userRoute')
const authRoute = require('./routes/authRoute')


const app = express()
app.use(express.json())

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration

// connect cloud database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: false
})
.then(() => console.log("success"))
.catch((err) => console.log(err))


app.use('/api',userRoute)
app.use('/api',authRoute)


const port = process.env.PORT || 8080
app.listen(port,()=>console.log("Server listening on port",port))