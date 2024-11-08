const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const cors=require("cors");
const countRoute = require('./routes/countRoute')


const app = express()
app.use(express.json())

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration

//connect cloud database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: false
})
.then(() => console.log("success"))
.catch((err) => console.log(err))


app.use('/api',countRoute)


const port = process.env.PORT || 8080
app.listen(port,()=>console.log("Server listening on port",port))